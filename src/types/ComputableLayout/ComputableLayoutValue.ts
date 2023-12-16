
export type ComputableLayoutValue = {
  mode: ComputableLayoutValueMode,
  offsetValue?: ComputableLayoutValueMode;
  offsetOperation?: ComputableLayoutOffsetOperation;
  minValue?: ComputableLayoutValueMode;
  maxValue?: ComputableLayoutValueMode;
};