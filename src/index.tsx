import {
  requireNativeComponent,
  UIManager,
  Platform,
  TextInputProps,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-emoji-textinput' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface EmojiTextinputProps extends Omit<TextInputProps, 'multiline'> {}

const ComponentName = 'EmojiTextinputView';

export const EmojiTextinputView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<EmojiTextinputProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
