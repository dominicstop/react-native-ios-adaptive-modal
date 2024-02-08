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

### Layout and Snapping Points

The layout config you provide defines the snapping point; i.e. the position of the modal in the screen defines the snapping point.

* A snapping point is a unique position in the screen that we want the modal to “snap to” either via￼ gesture (e.g. a user dragging the modal), or programmatically (via a function call).
* As the modal is being dragged around, it will morph between each snapping point you defined, using the gesture’s position to drive the interpolation of the modal.

- Each snapping point has a corresponding “percentage” that is derived based on its position on the screen, and the current modal direction defined in the config.
- The computed percentage is used to drive the modal animation as the user drags the modal around.

<br>

As such, each snapping point must be unique (no repeats/duplicates), and their corresponding computed percentage must change, either increasing or decreasing consistently in one direction.

- **Example 01**: A “left to right” modal’s snap points must continually move to the right; i.e. the layout the snapping points defined must change it’s width and/or increment its horizontal position, such that the modal’s `CGRect.maxX` (rightmost edge) increases continuously.<br><br>
- **Example 02**: A “bottom to top” modal’s snap points must continually move towards the top; i.e the layout the snapping points defined must change either it’s height, and/or increment its vertical position, such that the modal’s `CGRect.minY` (topmost edge) increases continuously.<br><br>
- **Example 03**: A “right to left” modal’s snap points must continually move to the left; i.e. the layout the snapping points defined must change it’s width and/or decrement it’s horizontal position, such that the modal's `CGRect.minX` (leftmost edge) decreases continuously.<br><br>
- **Example 04**: A “top to bottom” modal’s snap points must continually move to the bottom; i.e. the layout the snapping points defined must change it’s height and/or decrement it’s horizontal position, such that the modal's `CGRect.minX` (leftmost edge) decreases continuously.

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
