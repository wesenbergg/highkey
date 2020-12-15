**HIGHKEY CHALLENGE**

This is Highkey Internship / Tech challenges. Project is made using `react-native-cli`. No external libraries have been used in this project. This project have only been tested with Android emulator _Pixel 3 XL_.

____________

**How to run**

* For enviroment setup read [rn docs](https://reactnative.dev/docs/environment-setup)
* Check _package.json_ -> `scripts` for list of avaible commands.\
For starting application run first `npx react-native start` in one terminal, then `npx react-native run-android` in another.
_______________

**Challenges**

1. Recreate the UI on the picture below. Please note that functionality is not required.
![UI](https://raw.githubusercontent.com/wesenbergg/highkey/master/doc/target.png)
2. Create a function that turns a random string from lowercase to uppercase. For example, if the coming string is 'highkey', the outcome should be 'HIGHKEY'. To spice up this challenge, usage of the .toUpperCase() method is not allowed.

*NOTE*: For each challenge there is own screen in application. You can switch between screens by pressing 'W' button in the top-right corner.
__________________

**Key Components and functions**

*Theming*
- The key features in theming is `Text` component in _src/components_ and _theme.js_ in _src_.
- `Text` components idea is to make easier to reuse text-features.
- theme.js idea is to keep all theming values in one place.\

*Exercise 1:*
- Components can be found in _src/components/messageContainer_\

*Exrcise 2:*
- Components can be found in _src/components/toUppercaseForm_
- The algorith behind _Exercise 2_ is in _src/utils_ folder

____________________

**Screenshots**\
__Exercise 1 screenshot__\
![exercise1](https://raw.githubusercontent.com/wesenbergg/highkey/master/doc/exercise1.PNG)\
__Exercise 2 screenshot__\
![exercise2](https://raw.githubusercontent.com/wesenbergg/highkey/master/doc/exercise2.PNG)
