# react-native-ios-adaptive-modal

TBA

## A. Introduction

TBA

<br><br>

## B. Installation

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

```
# 1. install library + dependencies
npm install react-native-ios-utilities
npm install react-native-ios-adaptive-modal

# 2. then run pod install (uses auto-linking)
cd ios && pod install
```

<br><br>

## C. Basic Usage

TBA

<br><br>

## D.  Documentaation

TBA

<br><br>

## E.  Articles and Discussions

### How The Library Works

####  Dependecy: `AdaptiveModal`

All of the modal presentation and animation is handled by a small library written in swift called [`adaptive-modal`](https://github.com/dominicstop/adaptive-modal/). This library uses it under the hood for presenting a view controller with custom modal presentation.

![adaptive-modal-demo-01](https://github.com/dominicstop/adaptive-modal/raw/main/assets/demo-01-to-15.gif)

![adaptive-modal-demo-02](https://github.com/dominicstop/adaptive-modal/raw/main/assets/paginated-demo-01-02-03-04-05.gif)

`adaptive-modal` accepts a [config](https://github.com/dominicstop/adaptive-modal/blob/084bd51fa0f4afb02c1f0cc1f7aa00f0d88c510d/example/src/AdaptiveModalConfigDemoPresets.swift#L35-L147) that describes the state, behavior and layout of the modal, e.g.: 

* The various snapping points + layout of the modal (e.g. its width + height, margin, padding, etc).
* The modal transition animation (e.g. duration, easing, etc), presentation and dismissal style.
* Animating and applying the [keyframes](https://github.com/dominicstop/adaptive-modal/blob/084bd51fa0f4afb02c1f0cc1f7aa00f0d88c510d/Sources/AdaptiveModalConfig/AdaptiveModalKeyframeConfig.swift#L209-L263) (e.g. background blur, modal content background blur, background color, corner radius, etc).
* Etc.

<br>

It then transforms that config into something `UIKit` can understand via:

* Handling all the necessary conformances to `UIViewControllerAnimatedTransitioning`, `UIAdaptivePresentationControllerDelegate`, `UIViewControllerTransitioningDelegate`
* Handling the interpolation applied to the modal + keyframes when the modal is dragged around via gesture. 
* Using the defined keyframes and layout to animate the modal via `UIViewPropertyAnimator`. 

<br>

#### Dependency: `ComputableLayout`

To define the various snapping points, a small helper swift library called  [`ComputableLayout`](https://github.com/dominicstop/ComputableLayout) is used to configure the size and position of the modal. It's a very naive layout system custom built for [`adaptive-modal`](https://github.com/dominicstop/adaptive-modal/). 

It is essentially just a function that turns a config into raw x, y, width and height values; in other words, it's a way to cheaply calculate layout for a given configuration without having to instantiate a view. 

`ComputableLayout` allows us to compute all the snapping points for a target view's size; conversely, this also allows to quickly recalculate all of the snap points whenever there's a layout change for the target view (e.g. when the screen rotates, the window resizes, the appearance of a keyboard, etc).

![ComputableLayout-Demo-01](https://github.com/dominicstop/ComputableLayout/raw/main/Assets/2023-08-25-ComputaleLayoutTestPresets-02.gif)

<br>

#### Dependency: Helpers and Misc

[`DGSwiftUtilities`](https://github.com/dominicstop/DGSwiftUtilities) and [`react-native-ios-utilities`](https://github.com/dominicstop/react-native-ios-utilities) are just helper libraries. 

* `DGSwiftUtilities` contains shared code + helpers for the swift libraries
* `react-native-ios-utilities` contains shared code + helpers for the `react-native` libraries on iOS.

<br><br>

## F.  Usage and Examples

TBA

<br><br>

## E.  Showcase, Test and Demos

TBA

<br><br>

## F.  Licence

TBA

<br><br>

## G.  Misc and Contact

* 🐤 **Twitter/X**: `@GoDominic`
* 💌 **Email**: `dominicgo@dominicgo.dev`
* 🌐 **Website**: [dominicgo.dev](https://dominicgo.dev)
