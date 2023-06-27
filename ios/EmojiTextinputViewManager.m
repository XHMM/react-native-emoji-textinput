#import "EmojiTextinputViewManager.h"
#import "EmojiTextinputView.h"

@implementation EmojiTextinputViewManager

RCT_EXPORT_MODULE(EmojiTextinputView)

- (UIView *)view
{
  return [[EmojiTextinputView alloc] initWithBridge:self.bridge];
}

@end
