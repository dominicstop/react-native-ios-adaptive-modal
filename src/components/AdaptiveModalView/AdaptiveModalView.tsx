import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNIDetachedView, Helpers } from 'react-native-ios-utilities';

import { OnModalContentDetachedEvent, RNIAdaptiveModalView } from '../../native_components/RNIAdaptiveModalView';
import type { AdaptiveModalViewProps, AdaptiveModalViewState } from './AdaptiveModalViewTypes';
import { AdaptiveModalEventEmitter } from './AdaptiveModalEventEmitter';
import { TSEventEmitter } from '@dominicstop/ts-event-emitter';


const NATIVE_ID_KEYS = {
  modalContent: 'modalContent',
};

export class AdaptiveModalView extends 
  React.PureComponent<AdaptiveModalViewProps, AdaptiveModalViewState> {

  nativeRef!: RNIAdaptiveModalView;
  emitter!: AdaptiveModalEventEmitter;

  constructor(props: AdaptiveModalViewProps){
    super(props);

    this.state = {
      shouldMountModalContent: false,
    };

    this.emitter = new TSEventEmitter();
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

  private mountModalContent = async () => {
    await Promise.all([
      Helpers.setStateAsync<Partial<AdaptiveModalViewState>>(this, {
        shouldMountModalContent: true
      }),

      Helpers.promiseWithTimeout(1000, new Promise<void>(resolve => {
        this.emitter.once('onModalContentDetached', () => {
          resolve();
        });
      })),
    ]);
  };

  presentModal = async () => {
    await this.mountModalContent();
    await this.nativeRef.presentModal();
  };
  
  _handleOnModalContentDetached: OnModalContentDetachedEvent = (event) => {
    this.emitter.emit('onModalContentDetached', event.nativeEvent);
  };

  render(){
    const props = this.getProps();
    const state = this.state;

    return (
      <RNIAdaptiveModalView
        {...props.viewProps}
        ref={r => { this.nativeRef = r! }}
        style={[styles.nativeView, props.viewProps.style]}
        internalCleanupMode={props.internalCleanupMode}
        onModalContentDetached={this._handleOnModalContentDetached}
      >
        {state.shouldMountModalContent && (
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