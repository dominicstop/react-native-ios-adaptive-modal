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