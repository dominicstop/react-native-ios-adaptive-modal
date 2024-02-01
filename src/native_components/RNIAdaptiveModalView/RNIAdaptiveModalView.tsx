
import * as React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { RNIAdaptiveModalViewModule } from './RNIAdaptiveModalViewModule';
import { RNIAdaptiveModalNativeView } from './RNIAdaptiveModalNativeView';

import type { RNIAdaptiveModalViewProps } from './RNIAdaptiveModalViewTypes';
import { RNIAdaptiveModalCommandConfigPresent } from './RNIAdaptiveModalCommandPresentTypes';


export class RNIAdaptiveModalView extends React.PureComponent<RNIAdaptiveModalViewProps> {
  
  nativeRef?: View;
  reactTag?: number;

  constructor(props: RNIAdaptiveModalViewProps){
    super(props);
  };

  componentWillUnmount(){
    this.notifyOnComponentWillUnmount(false);
  };

  getNativeRef: () => View | undefined = () => {
    return this.nativeRef;
  };

  getNativeReactTag: () => number | undefined = () => {
    // @ts-ignore
    return this.nativeRef?.nativeTag ?? this.reactTag
  };

  notifyOnComponentWillUnmount = async (isManuallyTriggered: boolean = true) => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.notifyOnComponentWillUnmount(
      reactTag, 
      isManuallyTriggered
    );
  };

  notifyDidLayoutSubviews = async () => {
    const reactTag = this.getNativeReactTag();
    if(typeof reactTag !== 'number') return;

    await RNIAdaptiveModalViewModule.notifyDidLayoutSubviews(reactTag);
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