//
//  AndroidAppleView.m
//  AndroidApples
//
//  Created by Katheryn Shi on 11/2/15.
//  Copyright (c) 2015 Katheryn Shi. All rights reserved.
//

#import "AndroidAppleView.h"
#import "RCTRootView.h"

@implementation AndroidAppleView

- (void)awakeFromNib {
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"AndroidApple"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    [self addSubview:rootView];
    rootView.frame = self.bounds;
}

@end
