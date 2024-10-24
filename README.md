# react-native-ios-adaptive-modal

TBA

<br>

## 🚧⚠️ Re-Write WIP 🚧⚠️

This library is being re-written to support the new architecture. Please see this is [issue](https://github.com/dominicstop/react-native-ios-context-menu/issues/100#issuecomment-2077986438) for progress 😔

<br>

## Acknowledgements

The initial version of this library (`0.x`) was made possible through a generous sponsorship by [beatgig](https://beatgig.com/) from `11/15/2023` to ` 04/30/2024` at `$1,535`/month (totaling ≈ `$9,100` over the course of 6 months)

<br>

very special thanks to: [junzhengca](https://github.com/junzhengca), [brentvatne](https://github.com/brentvatne), [expo](https://github.com/expo), [EvanBacon](https://github.com/EvanBacon), [corasan](https://github.com/corasan), [lauridskern](https://github.com/lauridskern), and [ronintechnologies](https://github.com/ronintechnologies) for becoming a monthly sponsor and [fobos531](https://github.com/fobos531) for being a one time sponsor 🥺 (if you have the means to do so, please considering sponsoring [here](https://github.com/sponsors/dominicstop))

<br><br>

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

All of the modal presentation and animation is handled by a small library written in swift called: [`adaptive-modal`](https://github.com/dominicstop/adaptive-modal/). This library uses it under the hood for natively presenting a view controller with custom modal presentation.

![adaptive-modal-demo-01](https://github.com/dominicstop/adaptive-modal/raw/main/assets/demo-01-to-15.gif)

![adaptive-modal-demo-02](https://github.com/dominicstop/adaptive-modal/raw/main/assets/paginated-demo-01-02-03-04-05.gif)

`adaptive-modal` accepts a [config](https://github.com/dominicstop/adaptive-modal/blob/084bd51fa0f4afb02c1f0cc1f7aa00f0d88c510d/example/src/AdaptiveModalConfigDemoPresets.swift#L35-L147) that describes the state, behavior and layout of the modal:

* The config defines all the various snapping points (e.g. the position of the modal, and its layout, e.g. height, width, margin, padding, etc).

* The config defines the presentation, dismissal, and snapping animations, as well as how the modal should be animated (e.g. the animation duration, easing, etc),
* The config defines the associated [keyframes](https://github.com/dominicstop/adaptive-modal/blob/084bd51fa0f4afb02c1f0cc1f7aa00f0d88c510d/Sources/AdaptiveModalConfig/AdaptiveModalKeyframeConfig.swift#L209-L263) to apply for each snap point (e.g. the type and intensity of background + modal content background blur, the background color, corner radius, etc).
* Etc.

<br>

the modal config is then evaluated, and gets "transformed" into something `UIKit` can understand via:

* Handling all the necessary conformances to `UIViewControllerAnimatedTransitioning`, `UIAdaptivePresentationControllerDelegate`, `UIViewControllerTransitioningDelegate`
* Handling the interpolation applied to the modal + keyframes when the modal is dragged around via gesture. 
* Using the defined keyframes and layout to animate the modal via `UIViewPropertyAnimator`, and `CADisplayLink`.

<br>

#### Dependency: `ComputableLayout`

To define the various snapping points for the modal, a small helper library written in swift called  [`ComputableLayout`](https://github.com/dominicstop/ComputableLayout) is used to configure the size and position of the modal. This library is a very naive layout system/calculator custom built for [`adaptive-modal`](https://github.com/dominicstop/adaptive-modal/). 

This helper library is essentially just a function that turns a [config](https://github.com/dominicstop/ComputableLayout/blob/b9f9301497e23f18cd61d92c37ab1f9f65ce95b3/Example/Examples/ComputaleLayoutTestPresets.swift#L24-L671) (e.g. the desired horizontal/vertical position) into a `CGRect` value (i.e. raw x, y, width and height values); in other words, this library is used to cheaply calculate layout for a given configuration without having to instantiate a view. 

The layout config allows us to add placeholder "layout values" that are then substituted to the real values during calculation; some of these values are: 

* The safe area insets of the screen/window.
* The keyboard size (if it's currently visible)
* The `CGRect`/`CGSize` of various views, e.g target view, the current window, the device's screen, etc.

<br>

The layout config also allows for the composition of multiple "layout values" together, or have conditions that get evaluated during calculation.

The layout config is calculated based on a provided target view/rect, i.e. in the case for `adaptive-modal`, the target view would be the `UITransitionView` where the modal `UIViewController` gets attached to.

In summary: `ComputableLayout` allows us to compute all the snapping points for a target view's size, this allows for the quick recalculation of all the snapping points whenever there's a layout change for the target view (e.g. when the screen rotates, the window resizes, the appearance of a keyboard, etc).

![ComputableLayout-Demo-01](https://github.com/dominicstop/ComputableLayout/raw/main/Assets/2023-08-25-ComputaleLayoutTestPresets-02.gif)

<br>

#### Dependency: Helpers and Misc

[`DGSwiftUtilities`](https://github.com/dominicstop/DGSwiftUtilities) and [`react-native-ios-utilities`](https://github.com/dominicstop/react-native-ios-utilities) are just helper libraries. 

* `DGSwiftUtilities` contains shared code + helpers for the swift libraries.
* `react-native-ios-utilities` contains shared code + helpers for the `react-native` libraries on iOS.

<br><br>

### Layout and Snapping Points

The layout config you provide defines the snapping point.

* To be more specific, the layout config is used to calculate the position of the modal. The computed position of the modal in the screen defines the snapping point.
* A snapping point is a unique position in the screen that we want the modal to “snap to” either via￼ gesture (e.g. a user dragging the modal), or programmatically (via a function call).
* As the modal is being dragged around, it will morph between each snapping point you defined; using the gesture’s position to drive the interpolation of the modal.

- Each snapping point has a corresponding “percentage” that is derived based on its position on the screen, in relation to the current modal direction defined in the modal config.
- The snap point's computed percentage is then used in the interpolation function to drive the modal animation as the user drags the modal around.

<br>

Due to the quirks described in the previous bullet points, it is recommended that each snapping point be unique (no repeats or duplicates), and their corresponding computed percentage must change—either increasing or decreasing consistently in one direction.

- **Example 01**: A “left to right” modal’s snap points must continually move to the right; i.e. the layout that the snapping points defined must change it’s width and/or increment its horizontal position, such that the modal’s `CGRect.maxX` (rightmost edge) increases continuously.<br><br>
- **Example 02**: A “bottom to top” modal’s snap points must continually move towards the top; i.e the layout that the snapping points defined must change either it’s height, and/or increment its vertical position, such that the modal’s `CGRect.minY` (topmost edge) increases continuously.<br><br>
- **Example 03**: A “right to left” modal’s snap points must continually move to the left; i.e. the layout that the snapping points defined must change it’s width and/or decrement it’s horizontal position, such that the modal's `CGRect.minX` (leftmost edge) decreases continuously.<br><br>
- **Example 04**: A “top to bottom” modal’s snap points must continually move to the bottom; i.e. the layout that the snapping points defined must change it’s height and/or decrement it’s horizontal position, such that the modal's `CGRect.minX` (leftmost edge) decreases continuously.<br><br>
- **Summary**: You can think of `adaptive-modal` as a very limited/naive "range interpolator" (e.g. something like `lerp`). Because of this, the values in the "range" (in this case, the snapping points) must be continuous in one direction only, otherwise the resulting interpolated value (e.g. the position of the modal) will be invalid.

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
