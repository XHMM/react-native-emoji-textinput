# Not work on physical device
I have tried `textInputContextIdentifier` and `textInputMode` but not work in physical device(test on ios 16.6.1), I think you need to use a custom implemented emoji picker instead.

# react-native-emoji-textinput

**Still in development, please don't use it now.**

Show ios native emoji keyboard

## Why this
There are already js-implemented emoji picker components for usage, but I prefer using native solution for better performance, so I created this component.

## Limitation
- Only for ios now
- Only wrapped for single-line text-input component, if you want to support multi-line text-input, just open an issue. (I think it's more promising to put this feature into react-native)
- I haven't found a way to hide the globe(language-switch) icon below the ios keyboard, tell me if you found a way.

## Installation

```sh
npm install react-native-emoji-textinput
npx pod-install
```

## Usage
~~Use just like normal TextInput component except `multiline` prop~~
Not a truly TextInput wrapper
```js
import { EmojiTextinputView } from "react-native-emoji-textinput";

<EmojiTextinputView {...propsForTextInput} />
```


## Inspiration
Thanks for this [answer](https://stackoverflow.com/a/44753740) on the stackoverflow

## License

MIT
