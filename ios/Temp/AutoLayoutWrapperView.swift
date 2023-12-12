//
//  AutoLayoutWrapperView.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 12/10/23.
//

import Foundation
import ReactNativeIosUtilities

class AutoLayoutWrapperView: UIView {

  public override var frame: CGRect {
    willSet {
      self.updateSizeOfSubviews(newSize: newValue.size);
    }
  };

  override func addSubview(_ view: UIView) {
    if let detachedView = view as? RNIDetachedView {
      detachedView.updateBounds(newSize: self.bounds.size);
    };
    
    super.addSubview(view);
    return
    view.translatesAutoresizingMaskIntoConstraints = false;
    

    NSLayoutConstraint.activate([
      view.topAnchor.constraint(
        equalTo: self.topAnchor
      ),
      view.bottomAnchor.constraint(
        equalTo: self.bottomAnchor
      ),
      view.leadingAnchor.constraint(
        equalTo: self.leadingAnchor
      ),
      view.trailingAnchor.constraint(
        equalTo: self.trailingAnchor
      ),
  
    ]);
  }
  
  override func layoutSubviews() {
    super.layoutSubviews();
    self.updateSizeOfSubviews();
  };
  
  override func updateConstraints() {
    super.updateConstraints();
    self.updateSizeOfSubviews();
  };
  
  func updateSizeOfSubviews(newSize: CGSize? = nil){
    self.subviews.forEach {
      guard let detachedView = $0 as? RNIDetachedView else { return };
      detachedView.updateBounds(newSize: newSize ?? self.bounds.size);
    };
  };
};
