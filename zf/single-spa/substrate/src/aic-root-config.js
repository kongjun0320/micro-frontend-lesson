import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@aic/child-react",
  app: () => System.import("@aic/child-react"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@aic/vue-project",
  app: () => System.import("@aic/vue-project"),
  activeWhen: ["/vue"],
});

start({
  urlRerouteOnly: true,
});
