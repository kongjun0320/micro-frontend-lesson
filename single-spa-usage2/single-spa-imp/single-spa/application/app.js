import { reroute } from "../navigation/reroute.js";
import { NOT_LOADED } from "./app.helpers.js";

export const apps = []

export function registerApplication(appName, loadApp, activeWhen, customProps) {
  const registration = {
    name: appName,
    loadApp,
    activeWhen,
    customProps,
    status: NOT_LOADED
  };

  apps.push(registration)

  reroute()
}
