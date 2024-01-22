import { getAppChanges, shouldBeActive } from '../application/app.helpers.js';
import { toBootstrapPromise } from '../lifecycle/bootstrap.js';
import { toLoadPromise } from '../lifecycle/load.js';
import { toMountPromise } from '../lifecycle/mount.js';
import { toUnmountPromise } from '../lifecycle/unmount.js';
import { started } from '../start.js';
import './navigationEvent.js';
import { callCaptureEventListeners } from './navigationEvent.js';

export function reroute(event) {
  const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges();

  if (started) {
    // 用户调用了 start 方法，我们需要处理当前应用，要挂载或者卸载
    return performAppChange();
  }

  // 加载完毕后，需要去挂载的应用
  return loadApps();
  // 应用的加载
  function loadApps() {
    return Promise.all(appsToLoad.map(toLoadPromise)).then(callEventListener);
  }

  function performAppChange() {
    // 将不需要的应用卸载掉，返回一个卸载的 promise

    const unmountAllPromises = Promise.all(appsToUnmount.map(toUnmountPromise));

    // 流程：加载需要的应用 -> 启动对应的应用 -> 卸载之前的 -> 挂载对应的应用
    // 加载需要的应用（可能这个应用在注册的时候已经被加载了）
    // 默认情况注册的时候 路径是 /a，但是当我们 start 的时候应用是 /a
    const loadMountPromises = Promise.all(
      appsToLoad.map((app) =>
        toLoadPromise(app).then((app) => {
          return tryBootstrapAndMount(app, unmountAllPromises);
        })
      )
    );

    // 如果应用没有加载 加载 -> 挂载，如果应用已经加载过了，直接挂载
    const mountPromises = Promise.all(
      appsToMount.map((app) => tryBootstrapAndMount(app, unmountAllPromises))
    );

    function tryBootstrapAndMount(app, unmountAllPromises) {
      if (shouldBeActive(app)) {
        // 保证卸载完毕在挂载
        return toBootstrapPromise(app).then((app) =>
          unmountAllPromises.then(() => toMountPromise(app))
        );
      }
    }

    // 卸载完毕后
    return Promise.all([loadMountPromises, mountPromises]).then(() => {
      callEventListener();
    });
  }

  function callEventListener() {
    callCaptureEventListeners(event);
  }
}
