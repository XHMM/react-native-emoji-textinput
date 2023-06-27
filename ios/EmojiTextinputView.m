#import <React/RCTSinglelineTextInputView.h>
#import <React/RCTBridge.h>
#import <React/RCTLog.h>

#import "EmojiTextinputView.h"

@implementation EmojiTextinputView

- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  return [super initWithBridge:bridge];
}

- (UITextInputMode *) textInputMode {
    for (UITextInputMode *mode in UITextInputMode.activeInputModes) {
        if ([mode.primaryLanguage  isEqual: @"emoji"]) {
           // self.keyboardType = UIKeyboardTypeDefault;
           return mode;
        }
    }

    return nil;
}

- (NSString *) textInputContextIdentifier {
    NSArray *version = [[UIDevice currentDevice].systemVersion componentsSeparatedByString:@"."];
    // RCTLog(@"version: %@", version);
    if ( 13 == [[version objectAtIndex:0] intValue] ) {
      return @"";
    } else {
      return nil;
    }
}

@end
