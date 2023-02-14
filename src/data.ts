import { Polygon, SpatialReference } from "@arcgis/core/geometry";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import Map from "@arcgis/core/Map";

export const webSceneId = "2e0b4ceaba2d4ebb9f8022cb7632b3c6";
export const portalUrl = "https://zurich.maps.arcgis.com/";

export const liftIdFilterField = "LiftID";
export const liftIdFilterValue = 0; // exported features have this field value

export const slopeIdFilterField = "IDENT";
export const slopeIdFilterValue = "Planned"; // exported features have this field value

export function findCablesLayer(map: Map): FeatureLayer {
  return map.allLayers.find((l) => l.title === "Cables") as FeatureLayer;
}

export function findSlopesLayer(map: Map): FeatureLayer {
  return map.allLayers.find((l) => l.title === "Laax_Pisten") as FeatureLayer;
}

export function findTowersLayer(map: Map): FeatureLayer {
  return map.allLayers.find((l) => l.title === "Towers") as FeatureLayer;
}

export function findTreeLayer(map: Map): SceneLayer {
  return map.allLayers.find((l) => l.title.toLowerCase().includes("trees")) as SceneLayer;
}

export const skiResortArea = new Polygon({
  spatialReference: SpatialReference.WebMercator,
  rings: [
    [
      [1027366.689975178, 5909649.880978407],
      [1030811.7165206556, 5910411.434315916],
      [1030952.8585030324, 5910519.326941776],
      [1034765.3506876186, 5913434.020993405],
      [1034750.0442576343, 5914175.451842386],
      [1034346.8561939304, 5915734.075421101],
      [1034253.4702731038, 5915982.508451503],
      [1032181.0353130056, 5919242.605164339],
      [1031940.5852128919, 5919565.604695536],
      [1026167.1111423897, 5922887.624681337],
      [1025722.5010961614, 5923003.749687962],
      [1025428.2836819949, 5923071.014948887],
      [1023847.6582322213, 5923019.059411276],
      [1021248.5262333833, 5922738.602565023],
      [1018848.7451786584, 5922479.65214587],
      [1018805.7758552122, 5922204.423949589],
      [1018664.845379868, 5918776.686342662],
      [1019044.4448434731, 5916348.189457046],
      [1019072.7199941346, 5916179.261484419],
      [1019363.4865040865, 5915639.787934568],
      [1025251.5305945132, 5911116.647455261],
      [1027062.8990848032, 5909725.174684564],
      [1027208.6162982517, 5909652.320289185],
      [1027319.7799417577, 5909649.962288757],
      [1027366.689975178, 5909649.880978407]
    ]
  ]
});
