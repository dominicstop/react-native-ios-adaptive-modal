
import * as React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { RNIUtilitiesModule } from 'react-native-ios-utilities';

import { RNIAdaptiveModalViewModule } from './RNIAdaptiveModalViewModule';
import { RNIAdaptiveModalNativeView } from './RNIAdaptiveModalNativeView';

import type { RNIAdaptiveModalViewProps } from './RNIAdaptiveModalViewTypes';
import type { RNIAdaptiveModalCommandConfigPresent } from './RNIAdaptiveModalCommandPresentTypes';
import type { RNIAdaptiveModalCommandConfigDismiss } from './RNIAdaptiveModalCommandConfigDismiss';
import type { RNIAdaptiveModalCommandConfigSnapToCommon } from './RNIAdaptiveModalCommandSnapToCommonTypes';
import type { RNIAdaptiveModalCommandConfigSnapToOverride } from './RNIAdaptiveModalCommandSnapToOverrideTypes';
import type { RNIAdaptiveModalCommandConfigSnapTo } from './RNIAdaptiveModalCommandSnapToTypes';


export class RNIAdaptiveModalView extends React.PureComponent<RNIAdaptiveModalViewProps> {
  
  nativeRef?: View;
  reactTag?: number;

  constructor(props: RNIAdaptiveModalViewProps){
    super(props);
  };

  componentWillUnmount(){
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    RNIUtilitiesModule.notifyOnComponentWillUnmount(
      reactTag, {
        shouldForceCleanup: true,
        shouldIgnoreCleanupTriggers: false,
      }
    );
  };

  getNativeRef: () => View | undefined = () => {
    return this.nativeRef;
  };

  getNativeReactTag: () => number | undefined = () => {
    // @ts-ignore
    return this.nativeRef?.nativeTag ?? this.reactTag
  };

  notifyDidLayoutSubviews = async () => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.notifyDidLayoutSubviews(reactTag);
  };

  clearSnapPointOverride = async () => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.clearSnapPointOverride(reactTag);
  };

  presentModal = async (
    commandConfig: RNIAdaptiveModalCommandConfigPresent
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.presentModal(
      reactTag,
      commandConfig
    );
  };

  dismissModal = async (
    commandConfig: RNIAdaptiveModalCommandConfigDismiss
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.dismissModal(
      reactTag,
      commandConfig
    );
  };

  snapTo = async (
    commandConfig: RNIAdaptiveModalCommandConfigSnapTo
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.snapTo(
      reactTag,
      commandConfig
    );
  };

  snapToOverride = async (
    commandConfig: RNIAdaptiveModalCommandConfigSnapToOverride
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.snapToOverride(
      reactTag,
      commandConfig
    );
  };

  snapToClosestSnapPoint = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.snapToClosestSnapPoint(
      reactTag,
      commandConfig ?? {}
    );
  };

  snapToPrevSnapPointIndex = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.snapToPrevSnapPointIndex(
      reactTag,
      commandConfig ?? {}
    );
  };

  snapToCurrentSnapPointIndex = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.snapToCurrentSnapPointIndex(
      reactTag,
      commandConfig ?? {}
    );
  };

  snapToNextSnapPointIndex = async (
    commandConfig?: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.snapToNextSnapPointIndex(
      reactTag,
      commandConfig ?? {}
    );
  };

  // Event Handlers
  // --------------

  private _handleOnLayout = ({nativeEvent}: LayoutChangeEvent) => {
    // @ts-ignore
    this.reactTag = nativeEvent.target;
  };

  private _handleOnNativeRef = (ref: View) => {
    this.nativeRef = ref;
  };

  render(){
    return React.createElement(RNIAdaptiveModalNativeView, {
      ...this.props,
      ...((this.reactTag == null) && {
        onLayout: this._handleOnLayout,
      }),
      // @ts-ignore
      ref: this._handleOnNativeRef,
      style: [
        this.props.style,
        styles.nativeView
      ],
    });
  };
};

const styles = StyleSheet.create({
  nativeView: {
  },
});