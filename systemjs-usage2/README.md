# 实现微前端技术方案

## 1、iframe

- 微前端的最简单方案，通过 iframe 加载子应用
- 通信可以通过 postMessage 进行通信
- 完美的沙箱机制，自带应用隔离

> 缺点：用户体验差（弹框只能在 iframe 中、在内部切换刷新就会丢失状态）

## 1、Web Components

- 将前端应用程序分解为自定义 HTML 元素
- 基于 CustomEvent 实现通信
- Shadow DOM 天生的作用域隔离

> 缺点：浏览器支持问题、学习成本、调试困难、修改样式困难等问题。

## 1、single-spa

- single-spa 通过路由劫持实现应用等加载（采用 SystemJS），提供应用间公共组件加载及公共业务逻辑处理。子应用需要暴露固定的钩子 bootstrap、mount、unmount，接入协议
- 基于 props 主子应用通信
- 无沙箱机制，需要自己实现 JS 沙箱以及 CSS 沙箱

> 缺点：学习成本、无沙箱机制、需要对原有的应用进行改造、子应用间相同资源重复加载问题。

## 1、Module federation

- 通过模块联邦将组件进行打包导出使用
- 共享模块的方式进行通信
- 无 CSS 沙箱和 JS 沙箱

> 缺点：需要 webpack5
