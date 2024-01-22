import {
  LOADING_SOURCE_CODE,
  NOT_BOOTSTRAPED,
  NOT_LOADED,
} from '../application/app.helpers.js';

export function toLoadPromise(app) {
  return Promise.resolve().then(() => {
    if (app.status !== NOT_LOADED) {
      // 此应用加载完毕了
      return app;
    }
    // 正在加载应用
    app.status = LOADING_SOURCE_CODE;

    return app.loadApp(app.customProps).then((v) => {
      const { bootstrap, mount, unmount } = v;
      app.status = NOT_BOOTSTRAPED;
      app.bootstrap = bootstrap;
      app.mount = mount;
      app.unmount = unmount;
      return app;
    });
  });
}
