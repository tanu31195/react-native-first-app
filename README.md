# react-native-first-app

[Docs] (<https://reactnative.dev/docs/getting-started>)

Can develop native apps for Android and iOS, they're not web apps

To build React Native apps we can use,

- React Native CLI
- Expo CLI

Expo CLI is a set of tools and a framework thats on top of react native which reduces a lot of complexity. Makes it easier and faster to build apps. (No separate Android and iOS projects, only Javascript)

When using React Native CLI to build an app we get two separate Android and iOS projects and the Javascript code.

**Install Expo CLI**
npm i -g expo-cli

**Create Expo Project**
expo init FirstApp
(expo init react-native-first-app --template blank)

**Start Expo server**
npm start

**Publish app**
expo publish

Metro Bundler >> JS bundler for RN
Compiles JS files

## Debugging

- Can use metro bundler device log to check
- Remote debugging via chrome
- Debug in VSCode (launch.json)

## Components

We use function components, simpler and light weight

React Native has it's own components and will map them to native widgets  

### View (similar to div in web)  

iOS UIView  
Android AndroidView

We can use **SafeAreaView** to make sure components are not covered by the notch on iPhones

`backgroundColor: '#0FF'` We can use named colors/rgb/hex
`alignItems: 'center'` Horizontal
`justifyContent: 'center'` Vertical

### Images

When using require it will bundle the image into the app which will increase the size
Render local/static images `<Image style={styles.image} source={require('./assets/profile.png')} />`
For network images we pass an object with uri, height and width defined `<Image  source={{ width:200, height: 300, uri: "https://picsum.photos/200/300" }} />`
We can use `loadingIndicatorSource` to add a loading image for until network image is displayed

### Touchable

By using touchables we can make anything touchable
There're are different types of touchables depending on which feedback we want to give

## APIs

### Alert

    Alert.alert(
      'Alert Title',
      'Alert Msg',
      [{Array of buttons}]);

    Alert.prompt(
      'Prompt Title',
      'Prompt Msg',
      callback function to handle the text user enters(called when user clicks OK)
    )

### StyleSheet

Uses javascript properties not CSS(names are inspired by CSS)
We can use inline styling or use plain javascript objects directly

    StyleSheet.create();

The **create** method validates the properties in the styles we pass as objects

    style={[style.text, textStyle]}

Multiple style objects can be passed, the result would be a combination.
The object on the right(textStyle) will overrides the properties on the left

Styles can be extracted and be kept in a different file and import
**But the convention is to define the styles below the component**

### Platform

This module can be used to add platform specific code
`paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0`
