/**
 * Constants used in the application. All values are in meters.
 */

/**
 * The title used for exported webscenes.
 */
export const sceneExportTitle = "Plan Export";

/**
 * The speed factor used for the animation of the camera when transitioning between screens.
 */
export const transitionCameraAnimationSpeedFactor = 0.5;

/**
 * The speed factor used for the animation of the camera in the background of the task selection screen.
 */
export const backgroundCameraAnimationSpeedFactor = 0.01;

/**
 * Slope editor
 */
export const slopeBufferDistance = 15;
export const slopeMaxDeviation = 5;
export const slopeCostPerMeterSquared = 100;

/**
 * Lift editor
 */
export const cableColor = [120, 120, 120, 1];
export const towerColor = [128, 128, 128, 1];
export const liftInvalidPreviewColor = [255, 0, 0, 1];
export const cableOffset = 3;
export const initialTowerHeight = 10;
export const initialTowerSeparation = 200;
export const minTowerHeight = 5;
export const maxTowerHeight = 20;
export const minCableLength = 100;
export const maxCableLength = 10000;
export const minTowerSeparation = 50;
export const towerDimensionOffset = 4;
export const cableCostPerMeter = 100;
export const towerCost = 100000;

/**
 * Hide trees that are within this distance from slopes and lifts.
 */
export const treeFilterDistance = 20;

/**
 * Time interval between clock updates.
 */
export const clockIntervalMs = 100;

/**
 * Time interval between filter updates. Not updating the filter too frequently will keep updates appearing responsive.
 */
export const filterUpdateIntervalMs = 100;
