import { apps } from './app.js';

export const NOT_LOADED = 'NOT_LOADED';
export const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE';
export const LOAD_ERROR = 'LOAD_ERROR';
export const NOT_BOOTSTRAPED = 'NOT_BOOTSTRAPED';
export const BOOTSTRAPING = 'BOOTSTRAPING';
export const NOT_MOUNTED = 'NOT_MOUNTED';
export const MOUNTING = 'MOUNTING';
export const MOUNTED = 'MOUNTED';
export const UNMOUNTING = 'UNMOUNTING';

// 加载是正在下载应用，激活是已经运行了

/**
 * 查看应用是否正在激活
 */
export function isActive(app) {
  return app.status === MOUNTED;
}

/**
 * 查看应用是否被激活
 */
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
        // 当前路径下，哪些应用要被加载
        if (appShouldBeActive) {
          appsToLoad.push(app);
        }
        break;

      case NOT_BOOTSTRAPED:
      case BOOTSTRAPING:
      case NOT_MOUNTED:
        // 当前路径下，哪些应用要被挂载
        if (appShouldBeActive) {
          appsToMount.push(app);
        }
        break;

      case MOUNTED:
        // 当前路径下，哪些应用要被卸载
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
