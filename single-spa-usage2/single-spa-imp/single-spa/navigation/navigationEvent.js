// 对用户的路径切换，进行劫持后，重新调用 reroute 方法，进行计算应用的加载

import { reroute } from './reroute.js';

function urlRoute() {
  reroute(arguments);
}

window.addEventListener('hashchange', urlRoute);

window.addEventListener('popstate', urlRoute);

// 但是当路由切换的时候，我们出发 single-spa 的 addEventListener，但应用中也可能存在 addEventListener

// 需要劫持原生的路由系统，保证当我们加载完后再切换
const capturedEventListeners = {
  hashchange: [],
  popstate: [],
};

const listenerTo = ['hashchange', 'popstate'];
const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;

window.addEventListener = function (eventName, callback) {
  if (
    listenerTo.includes(eventName) &&
    !capturedEventListeners[eventName].some((listener) => listener === callback)
  ) {
    return capturedEventListeners[eventName].push(callback);
  }
  return originalAddEventListener.apply(this, arguments);
};

window.removeEventListener = function (eventName, callback) {
  if (listenerTo.includes(eventName)) {
    return (capturedEventListeners[eventName] = capturedEventListeners[
      eventName
    ].filter((fn) => fn !== callback));
  }
  return originalRemoveEventListener.apply(this, arguments);
};

export function callCaptureEventListeners(event) {
  if (event) {
    const eventType = event[0].type;
    if (listenerTo.includes(eventType)) {
      capturedEventListeners[eventType].forEach((listener) => {
        listener.apply(this, event);
      });
    }
  }
}
