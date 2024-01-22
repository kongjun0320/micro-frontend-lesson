// app status

import { apps } from './app.js';

// 没有被加载
export const NOT_LOADED = 'NOT_LOADED';
// 路径匹配了，要去加载这个资源
export const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE';
// 加载错误
export const LOAD_ERROR = 'LOAD_ERROR';
// 启动的过程
// 资源加载完毕了，需要启动，此时还没有启动
export const NOT_BOOTSTRAPED = 'NOT_BOOTSTRAPED';
// 启动中
export const BOOTSTRAPING = 'BOOTSTRAPING';
// 没有被挂载
export const NOT_MOUNTED = 'NOT_MOUNTED';
// 挂载流程
export const MOUNTING = 'MOUNTING';
// 挂载完成
export const MOUNTED = 'MOUNTED';
// 卸载流程
// 卸载中
export const UNMOUNTING = 'UNMOUNTING';

// 看一下这个应用是否正在被激活
export function isActive(app) {
  // 此应用正在被激活
  return app.status === MOUNTED;
}

// 看一下此应用是否被激活
export function shouldBeActive(app) {
  return app.activeWhen(window.location);
}

export function getAppChanges() {
  const appsToLoad = [];
  const appsToMount = [];
  const appsToUnmount = [];

  apps.forEach((app) => {
    const appShouldBeActive = shouldBeActive(app);

    switch (app.status) {
      case NOT_LOADED:
      case LOADING_SOURCE_CODE:
        // 标记当前路径下，哪些应用要被加载
        if (appShouldBeActive) {
          appsToLoad.push(app);
        }
        break;

      case NOT_BOOTSTRAPED:
      case BOOTSTRAPING:
      case NOT_MOUNTED:
        // 哪些应用要被挂载
        if (appShouldBeActive) {
          appsToMount.push(app);
        }
        break;

      case MOUNTED:
        // 哪些应用要被卸载
        if (!appShouldBeActive) {
          appsToUnmount.push(app);
        }
        break;

      default:
        break;
    }
  });

  return {
    appsToLoad,
    appsToMount,
    appsToUnmount,
  };
}
