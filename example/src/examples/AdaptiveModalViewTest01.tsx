import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { CGSize } from 'react-native-ios-utilities';
import { AdaptiveModalConfig, AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from './SharedExampleTypes';
import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card';

const ScreenSizes: Record<string, CGSize> = {
  iPhone8: {
    width: 375, 
    height: 667
  },
};

const modalConfig: AdaptiveModalConfig = {
  snapPoints: [{
    // Snap Point 1
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'stretch',
        },
      },
      height: {
        mode: {
          mode: 'percent',
          percentValue: 0.3,
        },
      }
    },
    keyframeConfig: {
      modalShadowOffset: {
        width: 0,
        height: -2,
      },
      modalShadowOpacity: 0.2,
      modalShadowRadius: 7,
      modalCornerRadius: 25,
      modalMaskedCorners: ['topCorners'],
      modalBackgroundOpacity: 0.9,
      modalBackgroundVisualEffect: 'systemUltraThinMaterial',
      modalBackgroundVisualEffectIntensity: 1,
      backgroundOpacity: 0,
      backgroundVisualEffect: 'systemUltraThinMaterialDark',
      backgroundVisualEffectIntensity: 0
    },
  }, {
    // Snap Point 2
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'stretch'
        },
      },
      height: {
        mode: {
          mode: 'percent',
          percentValue: 0.5,
        },        
      },
      marginLeft: {
        mode: {
          mode: 'constant',
          value: 15,
        }
      },
      marginRight: {
        mode: {
          mode: 'constant',
          value: 15,
        }
      },
      marginBottom: {
        mode: {
          mode: 'safeAreaInsets',
          insetKey: 'bottom',
        },
        minValue: {
          mode: 'constant',
          value: 15
        }
      },
    },
    keyframeConfig: {
      secondaryGestureAxisDampingPercent: 1,
      modalShadowOffset: {
        width: 2, 
        height: 2
      },
      modalShadowOpacity: 0.2,
      modalShadowRadius: 15,
      modalCornerRadius: 10,
      modalMaskedCorners: ['allCorners'],
      modalBackgroundOpacity: 0.85,
      modalBackgroundVisualEffectIntensity: 0.6,
      backgroundOpacity: 0.1,
      backgroundVisualEffectIntensity: 0.075
    },
  }, {
    // Snap Point 3
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'center',
      width: {
        mode: {
          mode: 'percent',
          percentValue: 0.85,
        },
        maxValue: {
          mode: 'constant',
          value: ScreenSizes.iPhone8.width,
        }
      },
      height: {
        mode: {
          mode: 'percent',
          percentValue: 0.75,
        },
        maxValue: {
          mode: 'constant',
          value: ScreenSizes.iPhone8.height,
        }
      }
    },
    keyframeConfig: {
      secondaryGestureAxisDampingPercent: 1,
      modalShadowOffset: {
        width: 0, 
        height: -1
      },
      modalShadowOpacity: 0.4,
      modalShadowRadius: 10,
      modalCornerRadius: 25,
      modalMaskedCorners: ['allCorners'],
      modalBackgroundOpacity: 0.83,
      modalBackgroundVisualEffectIntensity: 1,
      backgroundVisualEffectIntensity: 1
    },
  }, {
    // Snap Point 4
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'stretch'
        },
      },
      height: {
        mode: {
          mode: 'stretch'
        },
      },
      marginTop: {
        mode: {
          mode: 'safeAreaInsets',
          insetKey: 'top'
        },
      },
    },
    keyframeConfig: {
      secondaryGestureAxisDampingPercent: 1,
      modalShadowOffset: {
        width: 0, 
        height: -1
      },
      modalShadowOpacity: 0.4,
      modalShadowRadius: 10,
      modalCornerRadius: 25,
      modalMaskedCorners: ['topCorners'],
      modalBackgroundOpacity: 0.83,
      modalBackgroundVisualEffectIntensity: 1,
      backgroundVisualEffectIntensity: 1
    },
  }],
  snapDirection: 'bottomToTop',
  overshootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'fitScreen'
    },
  },
};

export function AdaptiveModalViewTest01(props: ExampleItemProps) {
  const modalRef = React.createRef<AdaptiveModalView>();
  
  return (
    <ExampleItemCard
      index={props.index}
      title={'AdaptiveModalViewTest01'}
      subtitle={'TBA'}
      description={[
        `Test - TBA`
      ]}
    >
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={modalConfig}
      >
        <View style={styles.rootModalContainer}>
          <Text>"Adaptive Modal"</Text>
        </View>
      </AdaptiveModalView>
      <CardButton
        title={'Show Modal'}
        subtitle={'Present modal...'}
        onPress={() => {
          modalRef?.current?.presentModal();
        }}
      />
    </ExampleItemCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootModalContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
});
