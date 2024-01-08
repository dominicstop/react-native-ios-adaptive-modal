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
  
  var constraints: WeakArray<NSLayoutConstraint> = .init();
  
  weak var modalContentConstraintWidth: NSLayoutConstraint?;
  weak var modalContentConstraintHeight: NSLayoutConstraint?;
  
  var modalContentConstraintSize: CGSize? {
    guard let modalContentConstraintWidth = self.modalContentConstraintWidth,
          let modalContentConstraintHeight = self.modalContentConstraintHeight
    else { return nil };

    return CGSize(
      width: modalContentConstraintWidth.constant,
      height: modalContentConstraintHeight.constant
    );
  };
  
  var modalManager: AdaptiveModalManager? {
    self.adaptiveModalView?.modalManager;
  };
  
  var contentAnchorMode: RNIModalContentAnchorMode = .center;
  
  init(
    adaptiveModalView: RNIAdaptiveModalView,
    modalContentDetachedView: RNIDetachedView
  ) {
    super.init(nibName: nil, bundle: nil);
  
    self.adaptiveModalView = adaptiveModalView;
    self.modalContentView = modalContentDetachedView;
    
    self.contentAnchorMode = adaptiveModalView.modalContentAnchorMode;
    self.setup();
  };
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  };
  
  func setup(){
    guard let modalManager = self.modalManager else { return };
    
    modalManager.animationEventDelegate.add(self);
    modalManager.presentationEventsDelegate.add(self);
    modalManager.displayLinkEventsDelegate = self;
  };
  
  func clearConstraints(){
    NSLayoutConstraint.deactivate(self.constraints.array);
    self.constraints = .init();
    
    self.modalContentConstraintWidth = nil;
    self.modalContentConstraintHeight = nil;
  };
  
  func setupConstraints(){
    guard let modalContentView = self.modalContentView?.contentView
    else { return };
    
    var constraints: [NSLayoutConstraint] = [];
        
    switch self.contentAnchorMode {
      case .center:
        let modalContentConstraintWidth = modalContentView.widthAnchor.constraint(
          equalToConstant: self.view.bounds.width
        );
        
        self.modalContentConstraintWidth = modalContentConstraintWidth;
        constraints.append(modalContentConstraintWidth);
        
        let modalContentConstraintHeight = modalContentView.heightAnchor.constraint(
          equalToConstant: self.view.bounds.height
        );
      
        self.modalContentConstraintHeight = modalContentConstraintHeight;
        constraints.append(modalContentConstraintHeight);
      
        constraints += [
          modalContentView.centerXAnchor.constraint(
            equalTo: self.view.centerXAnchor
          ),
          modalContentView.centerYAnchor.constraint(
            equalTo: self.view.centerYAnchor
          ),
        ];
      
      case .stretch:
        constraints += [
          modalContentView.leadingAnchor.constraint(
            equalTo: self.view.leadingAnchor
          ),
          modalContentView.trailingAnchor.constraint(
            equalTo: self.view.trailingAnchor
          ),
          modalContentView.topAnchor.constraint(
            equalTo: self.view.topAnchor
          ),
          modalContentView.bottomAnchor.constraint(
            equalTo: self.view.bottomAnchor
          ),
        ];
    };
    
    self.constraints = .init(initialItems: constraints);
    NSLayoutConstraint.activate(constraints);
  };
  
  func setContentAnchorMode(_ contentAnchorMode: RNIModalContentAnchorMode){
    self.contentAnchorMode = contentAnchorMode;
    
    self.clearConstraints();
    self.setupConstraints();
  };
  
  override func viewDidLoad() {
    super.viewDidLoad();
    
    guard let modalContentView = self.modalContentView?.contentView
    else { return };
    
    modalContentView.translatesAutoresizingMaskIntoConstraints = false;
    self.view.addSubview(modalContentView);
    
    print(
      "RNIAdaptiveModalController - viewDidLoad",
      "\n - modalContentView:", modalContentView,
      "\n - modalContentView.subviews.first:", modalContentView.subviews.first,
      "\n - modalContentView is UIScrollView:", modalContentView as? UIScrollView,
      "\n - modalContentView is RCTScrollView:", modalContentView as? RCTScrollView,
      "\n"
    );
    
    self.setupConstraints();
  };
  
  override func viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();
    self.updateModalContentSize();
  };
  
  func updateModalContentSize(withSize size: CGSize){
    guard let modalContentView = self.modalContentView else { return };
    
    switch self.contentAnchorMode {
      case .stretch:
        try? modalContentView.updateBounds(newSize: size);
        modalContentView.updateConstraints();
        
      case .center:
        guard let modalContentConstraintWidth = self.modalContentConstraintWidth,
              let modalContentConstraintHeight = self.modalContentConstraintHeight
        else { return };
        
        modalContentConstraintWidth.constant = size.width;
        modalContentConstraintHeight.constant = size.height;
        
        try? modalContentView.updateBounds(newSize: size);
        modalContentView.updateConstraints();
    };
  };
  
  func updateModalContentSize(){
    guard let modalManager = self.modalManager,
          !modalManager.isAnimating
    else { return }
    
    guard let modalContentView = self.modalContentView else { return };
    let nextSize = self.view.bounds.size;
    
    // print(
    //   "updateModalContentSize -", self._tempUpdateModalContentSizeCounter,
    //   "\n - contentAnchorMode:", self.contentAnchorMode,
    //   "\n - modalState:", modalManager.modalState,
    //   "\n - isSnapping:", modalManager.modalState.isSnapping,
    //   "\n - isAnimating:", modalManager.isAnimating,
    //   "\n - currentConstraintSize:", self.modalContentConstraintSize ?? .zero,
    //   "\n - modalContentView.size:", modalContentView.contentView?.bounds.size ?? .zero,
    //   "\n - nextSize:", nextSize,
    //   "\n"
    // );
    
    self._tempUpdateModalContentSizeCounter += 1;
    
    self.updateModalContentSize(withSize: nextSize);
  };
};

