import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: '@aic/child-react',
  app: () => System.import('@aic/child-react'),
  activeWhen: (location) => location.pathname.startsWith('/react'),
  customProps: { authToken: 'd83jD63UdZ6RS6f70D0' },
});

registerApplication({
  name: '@aic/child-vue',
  app: () => System.import('@aic/child-vue'),
  activeWhen: ['/vue'],
});

// registerApplication({
//   name: "@aic/navbar",
//   app: () => System.import("@aic/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
