# react-native-emoji-textinput

Show ios native emoji keyboard
## Installation

```sh
npm install react-native-emoji-textinput
npx pod-install
```


## Usage

```js
import { EmojiTextinputView } from "react-native-emoji-textinput";

<EmojiTextinputView {...propsForTextInput} />
```

## Limitation
- I only wrapped for single-line text-input component, if you want to support multi-line text-input, just open an issue. (I think it's more promising to put this feature into react-native)
- I haven't found a way to hide the globe(language-switch) icon below the ios keyboard, tell me if you found a way.

## Inspiration
Thanks for this [answer](https://stackoverflow.com/a/44753740) on stackoverflow

## License

MIT
