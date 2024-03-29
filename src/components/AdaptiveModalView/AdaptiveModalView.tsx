import React from 'react';
import { StyleSheet } from 'react-native';

import { TSEventEmitter } from '@dominicstop/ts-event-emitter';
import { RNIDetachedView, Helpers } from 'react-native-ios-utilities';

import { OnBackgroundTapGestureEvent, OnCurrentModalConfigDidChangeEvent, OnModalContentInitializedEvent, OnModalDidHideEvent, OnModalDidShowEvent, OnModalDidSnapEvent, OnModalDismissCancelledEvent, OnModalPresentCancelledEvent, OnModalStateWillChangeEvent, OnModalWillHideEvent, OnModalWillShowEvent, OnModalWillSnapEvent, RNIAdaptiveModalCommandConfigDismiss, RNIAdaptiveModalCommandConfigSnapTo, RNIAdaptiveModalCommandConfigSnapToCommon, RNIAdaptiveModalCommandConfigSnapToOverride, RNIAdaptiveModalView } from '../../native_components/RNIAdaptiveModalView';
import type { AdaptiveModalViewProps, AdaptiveModalViewState } from './AdaptiveModalViewTypes';

import { AdaptiveModalEventEmitter } from './AdaptiveModalEventEmitter';
import { RNIAdaptiveModalCommandConfigPresent } from '../../native_components/RNIAdaptiveModalView';


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

  // Internal Functions
  // ------------------

  private getProps = () => {
    const {
      modalConfig,
      modalContentAnchorMode,
      modalAnimationMode,
      shouldEnableContinuousLayoutResizingDuringAnimation,
      shouldEnableSnapping,
      shouldEnableOverShooting,
      shouldDismissKeyboardOnGestureSwipe,
      shouldLockAxisToModalDirection,
      overrideShouldSnapToUnderShootSnapPoint,
      overrideShouldSnapToOvershootSnapPoint,
      shouldDismissModalOnSnapToUnderShootSnapPoint,
      shouldDismissModalOnSnapToOverShootSnapPoint,
      isSwipeGestureEnabled,
      isModalContentSwipeGestureEnabled,
      allowModalToDragWhenAtMinScrollViewOffset,
      allowModalToDragWhenAtMaxScrollViewOffset,
      isModalDragHandleGestureEnabled,
      internalViewCleanupMode,
      ...viewProps
    } = this.props;

    return {
      // A. Group native props for `RNIAdaptiveModalView`...
      nativeProps: {
        // Pass down props...
        modalConfig,
        modalAnimationMode,
        overrideShouldSnapToUnderShootSnapPoint,
        overrideShouldSnapToOvershootSnapPoint,

        // Pass down props w/ default value...
        modalContentAnchorMode: (
          modalContentAnchorMode ?? 'center'
        ),
        shouldEnableContinuousLayoutResizingDuringAnimation: (
          shouldEnableContinuousLayoutResizingDuringAnimation ?? true
        ),
        shouldEnableSnapping: (
          shouldEnableSnapping ?? true
        ),
        shouldEnableOverShooting: (
          shouldEnableOverShooting ?? true
        ),
        shouldDismissKeyboardOnGestureSwipe: (
          shouldDismissKeyboardOnGestureSwipe ?? false
        ),
        shouldLockAxisToModalDirection: (
          shouldLockAxisToModalDirection ?? false
        ),
        shouldDismissModalOnSnapToUnderShootSnapPoint: (
          shouldDismissModalOnSnapToUnderShootSnapPoint ?? true
        ),
        shouldDismissModalOnSnapToOverShootSnapPoint: (
          shouldDismissModalOnSnapToOverShootSnapPoint ?? false
        ),
        isSwipeGestureEnabled: (
          isSwipeGestureEnabled ?? true
        ),
        isModalContentSwipeGestureEnabled: (
          isModalContentSwipeGestureEnabled ?? true
        ),
        allowModalToDragWhenAtMinScrollViewOffset: (
          allowModalToDragWhenAtMinScrollViewOffset ?? true
        ),
        allowModalToDragWhenAtMaxScrollViewOffset: (
          allowModalToDragWhenAtMaxScrollViewOffset ?? true
        ),
        isModalDragHandleGestureEnabled: (
          isModalDragHandleGestureEnabled ?? true
        ),
        internalViewCleanupMode: (
          internalViewCleanupMode ?? { mode: 'default' }
        ),
      },

      // B. Move all the default view-related
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

  notifyDidLayoutSubviews = async () => {
    this.nativeRef.notifyDidLayoutSubviews();
  };

  clearSnapPointOverride = async () => {
    this.nativeRef.clearSnapPointOverride();
  };

  presentModal = async (
    commandConfig: RNIAdaptiveModalCommandConfigPresent
  ) => {
    await this.mountModalContent();
    await this.nativeRef.presentModal(commandConfig);
  };

  dismissModal = async (
    commandConfig: RNIAdaptiveModalCommandConfigDismiss
  ) => {
    await this.nativeRef.dismissModal(commandConfig);
  };

  snapTo = async (
    commandConfig: RNIAdaptiveModalCommandConfigSnapTo
  ) => {
    await this.nativeRef.snapTo(commandConfig);
  };

  snapToOverride = async (
    commandConfig: RNIAdaptiveModalCommandConfigSnapToOverride
  ) => {
    await this.nativeRef.snapToOverride(commandConfig);
  };

  snapToClosestSnapPoint = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    await this.nativeRef.snapToClosestSnapPoint(commandConfig);
  };

  snapToPrevSnapPointIndex = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    await this.nativeRef.snapToPrevSnapPointIndex(commandConfig);
  };

  snapToCurrentSnapPointIndex = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    await this.nativeRef.snapToCurrentSnapPointIndex(commandConfig);
  };

  snapToNextSnapPointIndex = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    await this.nativeRef.snapToNextSnapPointIndex(commandConfig);
  };

  // Event Handlers
  // --------------
  
  _handleOnModalContentDetached: OnModalContentInitializedEvent = (event) => {
    this.emitter.emit('onModalContentInitialized', event.nativeEvent);
  };

  _handleOnModalWillSnap: OnModalWillSnapEvent = (event) => {
    this.props.onModalWillSnap?.(event);
  };

  _handleOnModalDidSnap: OnModalDidSnapEvent = (event) => {
    this.props.onModalDidSnap?.(event);
  };

  _handleOnModalWillShow: OnModalWillShowEvent = (event) => {
    this.props.onModalWillShow?.(event);
  };

  _handleOnModalDidShow: OnModalDidShowEvent = (event) => {
    this.props.onModalDidShow?.(event);
  };

  _handleOnModalWillHide: OnModalWillHideEvent = (event) => {
    this.props.onModalWillHide?.(event);
  };

  _handleOnModalDidHide: OnModalDidHideEvent = (event) => {
    this.props.onModalDidHide?.(event);
    this.setState({shouldMountModalContent: false});  
  };

  _handleOnModalPresentCancelled: OnModalPresentCancelledEvent = (event) => {
    this.props.onModalPresentCancelled?.(event);
  };

  _handleOnModalDismissCancelled: OnModalDismissCancelledEvent = (event) => {
    this.props.onModalDismissCancelled?.(event);
  };

  _handleOnCurrentModalConfigDidChange: OnCurrentModalConfigDidChangeEvent = (event) => {
    this.props.onCurrentModalConfigDidChange?.(event);
  };

  _handleOnBackgroundTapGesture: OnBackgroundTapGestureEvent = (event) => {
    this.props.onBackgroundTapGesture?.(event);
  };

  _handleOnModalStateWillChange: OnModalStateWillChangeEvent = (event) => {
    this.props.onModalStateWillChange?.(event);
  };

  // Render
  // -----
  
  render(){
    const props = this.getProps();
    const state = this.state;

    return (
      <RNIAdaptiveModalView
        {...props.viewProps}
        {...props.nativeProps}
        ref={r => { this.nativeRef = r! }}
        style={[styles.nativeView, props.viewProps.style]}
        onModalContentInitialized={this._handleOnModalContentDetached}
        onModalWillSnap={this._handleOnModalWillSnap}
        onModalDidSnap={this._handleOnModalDidSnap}
        onModalWillShow={this._handleOnModalWillShow}
        onModalDidShow={this._handleOnModalDidShow}
        onModalWillHide={this._handleOnModalWillHide}
        onModalDidHide={this._handleOnModalDidHide}
        onModalPresentCancelled={this._handleOnModalPresentCancelled}
        onModalDismissCancelled={this._handleOnModalDismissCancelled}
        onCurrentModalConfigDidChange={this._handleOnCurrentModalConfigDidChange}
        onBackgroundTapGesture={this._handleOnBackgroundTapGesture}
        onModalStateWillChange={this._handleOnModalStateWillChange}
      >
        {state.shouldMountModalContent && (
          <RNIDetachedView
            contentTargetMode={'subview'}
            style={styles.modalContent}
            nativeID={NATIVE_ID_KEYS.modalContent}
            shouldCleanupOnComponentWillUnmount={true}
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
    overflow: 'hidden',
  },
});