

export type AdaptiveModalState = 
  | 'INITIAL'
  | 'PRESENTING_PROGRAMMATIC'
  | 'PRESENTING_GESTURE'
  | 'PRESENTED_PROGRAMMATIC'
  | 'PRESENTED_GESTURE'
  | 'DISMISSING_PROGRAMMATIC'
  | 'DISMISSING_GESTURE'
  | 'DISMISSED_PROGRAMMATIC'
  | 'DISMISSED_GESTURE'
  | 'SNAPPING_FROM_GESTURE_DRAGGING'
  | 'SNAPPING_PROGRAMMATIC'
  | 'SNAPPED_FROM_GESTURE_DRAGGING'
  | 'SNAPPED_PROGRAMMATIC'
  | 'GESTURE_DRAGGING';