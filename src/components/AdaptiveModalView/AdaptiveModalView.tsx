import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNIDetachedView } from 'react-native-ios-utilities';

import { RNIAdaptiveModalView } from '../../native_components/RNIAdaptiveModalView';
import type { AdaptiveModalViewProps, AdaptiveModalViewState } from './AdaptiveModalViewTypes';


const NATIVE_ID_KEYS = {
  modalContent: 'modalContent',
};

export class AdaptiveModalView extends 
  React.PureComponent<AdaptiveModalViewProps, AdaptiveModalViewState> {

  nativeRef!: RNIAdaptiveModalView;

  constructor(props: AdaptiveModalViewProps){
    super(props);

    this.state = {
    };
  };

  componentWillUnmount(): void {
    this.nativeRef.notifyOnComponentWillUnmount();
  };

  private getProps = () => {
    const {
      internalCleanupMode,
      ...viewProps
    } = this.props;

    return {
      // A. Provide default values to props...
      internalCleanupMode: (
        internalCleanupMode ?? 'reactComponentWillUnmount'
      ),
      // WIP - TBA

      // B. Pass down props...
      // WIP - TBA

      // C. Pass down, and group event props...
      // WIP - TBA
      eventProps: {
      },

      // D. Pass down, and group render props
      // WIP - TBA
      renderProps: {
      },

      // E. Move all the default view-related
      //    props here...
      viewProps,
    };
  };

  presentModal = async () => {
    await this.nativeRef.presentModal();
  };

  //#region - Handlers
  //#endregion

  render(){
    const props = this.getProps();
    const state = this.state;

    const shouldMount = true;

    return (
      <RNIAdaptiveModalView
        {...props.viewProps}
        // @ts-ignore
        ref={r => { this.nativeRef = r! }}
        style={[styles.nativeView, props.viewProps.style]}
        internalCleanupMode={props.internalCleanupMode}
      >
        {shouldMount && (
          <RNIDetachedView
            style={styles.modalContent}
            nativeID={NATIVE_ID_KEYS.modalContent}
            shouldCleanupOnComponentWillUnmount={false}
          >
            {props.viewProps.children}
          </RNIDetachedView>
        )}
      </RNIAdaptiveModalView>
    );
  };
};

const styles = StyleSheet.create({
  nativeView: {
  },
  modalContent: {
    //backgroundColor: 'blue'
  },
});