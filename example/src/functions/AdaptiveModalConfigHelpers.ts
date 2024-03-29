import { AdaptiveModalConfig, AdaptiveModalSnapPointConfig } from "react-native-ios-adaptive-modal";

export function getSnapPointsWithKeys(
  modalConfig: AdaptiveModalConfig
): Array<AdaptiveModalSnapPointConfig> {

  return modalConfig.snapPoints.filter((snapPoint) => snapPoint.key != null);
};

export function getSnapPointKeys(modalConfig: AdaptiveModalConfig){
  const snapPoints = getSnapPointsWithKeys(modalConfig);
  return snapPoints.map((item) => item.key!);
};

export function getSnapPointCount(modalConfig: AdaptiveModalConfig){
  let baseSnapPointCount = modalConfig.snapPoints.length;

  // undershoot snap point
  baseSnapPointCount++;

  if(modalConfig.overshootSnapPoint != null){
    baseSnapPointCount++;
  };

  return baseSnapPointCount;
};