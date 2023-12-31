// QuartsCore/CALayer

export type CACornerMaskItems = 
  | 'layerMinXMinYCorner'
  | 'layerMaxXMinYCorner'
  | 'layerMinXMaxYCorner'
  | 'layerMaxXMaxYCorner';

export type CACornerMaskAliasItems = 
  | 'allCorners'
  | 'topCorners'
  | 'bottomCorners'
  | 'leftCorners'
  | 'rightCorners'
  | 'rightCorners';

export type CACornerMask = Array<
  | CACornerMaskAliasItems 
  | CACornerMaskItems
>;