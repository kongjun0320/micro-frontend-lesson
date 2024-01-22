import { getAppChanges } from '../application/app.helpers.js';
import { apps } from '../application/app.js';
import { toLoadPromise } from '../lifecycle/load.js';

export function reroute() {
  // 获取 app 对应的状态，进行分类
  const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges();

  console.log(appsToLoad, appsToMount, appsToUnmount);
  // 加载完毕后 需要去挂载的应用
  const loadMountPromises = Promise.all(
    appsToLoad.map((app) => toLoadPromise(app).then(() => {
      console.log(apps);
    }))
  );
  
}
