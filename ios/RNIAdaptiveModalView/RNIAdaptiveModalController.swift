//
//  RNIAdaptiveModalController.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 12/13/23.
//

import UIKit
import ExpoModulesCore

import ReactNativeIosUtilities
import DGSwiftUtilities
import AdaptiveModal
import ComputableLayout


class RNIAdaptiveModalController: UIViewController {

  var _tempUpdateModalContentSizeCounter = 0;

  weak var adaptiveModalView: RNIAdaptiveModalView?;
  weak var modalContentView: RNIDetachedView?;
   
  weak var modalContentConstraintWidth: NSLayoutConstraint?;
  weak var modalContentConstraintHeight: NSLayoutConstraint?;
  
  var modalManager: AdaptiveModalManager? {
    self.adaptiveModalView?.modalManager;
  };
  
  init(
    adaptiveModalView: RNIAdaptiveModalView,
    modalContentView: RNIDetachedView
  ) {
    super.init(nibName: nil, bundle: nil);
  
    self.adaptiveModalView = adaptiveModalView;
    self.modalContentView = modalContentView;
    
    self.setup();
  };
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  };
  
  func setup(){
    guard let modalManager = self.modalManager else { return };
    modalManager.animationEventDelegate.add(self);
    modalManager.presentationEventsDelegate.add(self);
  };
  
  override func viewDidLoad() {
    super.viewDidLoad();
    
    guard let modalContentView = self.modalContentView else { return };
    
    
    modalContentView.translatesAutoresizingMaskIntoConstraints = false;
    self.view.addSubview(modalContentView);
    
    let modalContentConstraintWidth = modalContentView.widthAnchor.constraint(
      equalToConstant: self.view.bounds.width
    );
    
    self.modalContentConstraintWidth = modalContentConstraintWidth;
    
    let modalContentConstraintHeight = modalContentView.heightAnchor.constraint(
      equalToConstant: self.view.bounds.height
    );
  
    self.modalContentConstraintHeight = modalContentConstraintHeight;
    
    NSLayoutConstraint.activate([
      modalContentConstraintWidth,
      modalContentConstraintHeight,
    
      modalContentView.centerXAnchor.constraint(
        equalTo: self.view.centerXAnchor
      ),
      modalContentView.centerYAnchor.constraint(
        equalTo: self.view.centerYAnchor
      ),
    ]);
  };
  
  override func viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();
    self.updateModalContentSize();
  };
  
  func updateModalContentSize(){
    guard let modalManager = self.modalManager,
          let modalContentView = self.modalContentView,
          let modalContentConstraintWidth = self.modalContentConstraintWidth,
          let modalContentConstraintHeight = self.modalContentConstraintHeight
    else { return };
    
    let nextSize: CGSize? = {
      if modalManager.isAnimating {
        guard let dummyModalView = modalManager.dummyModalView,
              let dummyModalViewLayer = dummyModalView.layer.presentation()
        else { return nil };
        
        return nil;
        // return dummyModalViewLayer.bounds.size;
      };
      
      return self.view.bounds.size;
    }();
    
    guard let nextSize = nextSize else { return };
    
    let currentConstraintSize = CGSize(
      width: modalContentConstraintWidth.constant,
      height: modalContentConstraintHeight.constant
    );
    
    let currentSize = modalContentView.frame.size;
    
    print(
      "updateModalContentSize -", self._tempUpdateModalContentSizeCounter,
      "\n - modalState", modalManager.modalState,
      "\n - isAnimating", modalManager.isAnimating,
      "\n - currentConstraintSize:", currentConstraintSize,
      "\n - currentSize:", currentSize,
      "\n - nextSize:", nextSize,
      "\n"
    );
    
    self._tempUpdateModalContentSizeCounter += 1;
    
    modalContentConstraintWidth.constant = nextSize.width;
    modalContentConstraintHeight.constant = nextSize.height;
    
    modalContentView.updateConstraints();
    modalContentView.updateBounds(newSize: nextSize);
  };
};

