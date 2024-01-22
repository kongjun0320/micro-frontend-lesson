import { reroute } from './navigation/reroute.js';

// 默认没有调用 start 方法
export let started = false;

export function start() {
  // 用户启动了
  started = true;
  reroute();
}
