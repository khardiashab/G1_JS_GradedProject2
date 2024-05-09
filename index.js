import { Utils } from "./web-app/Utils.js";
import { WebApp } from "./web-app/webapp.js";

const webApp = new WebApp();

webApp.init();
webApp.main();
webApp.eventListener();
console.log(Utils.readDataFile());
