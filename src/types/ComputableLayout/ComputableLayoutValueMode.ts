import { CGRect, CGSize } from "react-native-ios-utilities";
import { UIEdgeInsets } from "../TempMiscTypes";
import { ComputableLayoutValuePercentTarget } from "./ComputableLayoutValuePercentTarget";
import { ComputableLayoutValueEvaluableCondition } from "./ComputableLayoutValueEvaluableCondition";


export type ComputableLayoutValueMode = {
  mode: 'stretch';
} | {
  mode: 'constant';
  value: number;
} | {
  mode: 'percent';
  relativeTo?: ComputableLayoutValuePercentTarget;
  percentValue: number;
} | {
  mode: 'safeAreaInsets';
  insetKey: keyof UIEdgeInsets;
} | {
  mode: 'keyboardScreenRect';
  rectKey: keyof CGRect;
} | {
  mode: 'keyboardRelativeSize';
  sizeKey: keyof CGSize;
} | {
  mode: 'multipleValues';
  values: [ComputableLayoutValueMode];
} | {
  mode: 'conditionalLayoutValue';
  condition: ComputableLayoutValueEvaluableCondition;
  trueValue: ComputableLayoutValueMode;
  falseValue?: ComputableLayoutValueMode;
} | {
  mode: 'conditionalValue';
  condition: EvaluableCondition;
  trueValue?: ComputableLayoutValueMode;
  falseValue?: ComputableLayoutValueMode;
};