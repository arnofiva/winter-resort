import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";

import App from "./components/App";
import { portalUrl, webSceneId } from "./data";
import AppStore from "./stores/AppStore";

setAssetPath(window.document.URL);
esriConfig.assetsPath = "./assets";

const oAuthInfo = new OAuthInfo({
  appId: "KojZjH6glligLidj",
  popup: true,
  popupCallbackUrl: `${document.location.origin}${document.location.pathname}oauth-callback-api.html`,
  portalUrl
});

IdentityManager.registerOAuthInfos([oAuthInfo]);

(window as any).setOAuthResponseHash = (responseHash: string) => {
  IdentityManager.setOAuthResponseHash(responseHash);
};

const map = new WebScene({ portalItem: { id: webSceneId, portal: { url: portalUrl } } });
const view = (window["view"] = new SceneView({
  container: "view",
  map,
  environment: {
    lighting: {
      directShadowsEnabled: true
    },
    weather: { type: "cloudy", cloudCover: 0.2 }
  },
  padding: { top: 100 }, // include padding from application header
  qualityProfile: "high"
}));

view.popup.defaultPopupTemplateEnabled = true;

const store = new AppStore({ view });
store.openTaskSelectionScreen({ animateCameraToStart: false });
new App({ container: document.getElementById("app"), store });
