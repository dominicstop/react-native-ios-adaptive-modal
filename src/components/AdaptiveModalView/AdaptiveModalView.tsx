import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNIDetachedView, Helpers } from 'react-native-ios-utilities';

import { OnModalContentInitializedEvent, OnModalDidHideEvent, RNIAdaptiveModalView } from '../../native_components/RNIAdaptiveModalView';
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

  // Lifecycle
  // ---------

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

  // Internal Functions
  // ------------------

  private getProps = () => {
    const {
      modalConfig,
      internalCleanupMode,
      modalContentAnchorMode,
      ...viewProps
    } = this.props;

    return {
      // A. Provide default values to props...
      internalCleanupMode: (
        internalCleanupMode ?? 'reactComponentWillUnmount'
      ),
      modalContentAnchorMode: (
        modalContentAnchorMode ?? 'center'
      ),

      // B. Pass down props...
      modalConfig,

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
        this.emitter.once('onModalContentInitialized', () => {
          resolve();
        });
      })),
    ]);
  };

  // Public Functions
  // ----------------

  presentModal = async () => {
    await this.mountModalContent();
    await this.nativeRef.presentModal();
  };

  // Event Handlers
  // --------------
  
  _handleOnModalContentDetached: OnModalContentInitializedEvent = (event) => {
    this.emitter.emit('onModalContentInitialized', event.nativeEvent);
  };

  _handleOnModalDidHide: OnModalDidHideEvent = (event) => {
    this.setState({shouldMountModalContent: false});
  };

  // Render
  // -----
  
  render(){
    const props = this.getProps();
    const state = this.state;

    return (
      <RNIAdaptiveModalView
        {...props.viewProps}
        ref={r => { this.nativeRef = r! }}
        style={[styles.nativeView, props.viewProps.style]}
        modalConfig={props.modalConfig}
        modalContentAnchorMode={props.modalContentAnchorMode}
        internalCleanupMode={props.internalCleanupMode}
        onModalContentInitialized={this._handleOnModalContentDetached}
        onModalDidHide={this._handleOnModalDidHide}
      >
        {state.shouldMountModalContent && (
          <RNIDetachedView
            contentTargetMode={'subview'}
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
    //backgroundColor: 'rgba(0,0,255,0.1)'
  },
});