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

## Layouts

### Dimensions

    width: 150,
    height: 70
The following values are in Density-Independent Pixels (DIPs)
`Physical Pixels = DIPs x Scale Factor`
Views will look the same across all devices
The Dimensions API can be used to get device's dimensions
`Dimensions.get("window" | "screen")`
In iOS both window and screen sizes are equal, in Android it's different
This does not detect orientation changes

In app.json we can set the orientation,

    "orientation": "portrait"
    "orientation": "landscape"
    "orientation": "default"

`npm i @react-native-community/hooks` can be used to detect orientation changes

### Flexbox

By default React Native vertically aligns items in a container(column)
`flexDirection: "row"`  will layout horizontally
`justifyContent: "center"` will align items along the **primary** axis
`alignItems: "center"` will align items along the **secondary** axis

**Row**
Primary Axis = Horizontal
Cross/Secondary Axis = Vertical

**Column**
Primary Axis = Vertical
Cross/Secondary Axis = Horizontal

We can change alignment of single items by using,
`alignSelf: "flex-start"`

In flex if items overflow across the main axis, one or more items will get shrunk so other items can fit. This behavior can be changed by using **wrapping**
`flexWrap: "wrap"`
When wrapping is enabled, **alignItems** behave differently when multiple lines of content is present (alignment of items on the secondary axis within each line)

Determines the alignment of the entire content on the secondary axis(Main container)
`alignContent: "center"`
Only works when wrapping is enabled

`flexBasis: 100`
Can set the size of an item along the primary axis
width:100 > row
height:100 > column

`flexGrow: 1`
Will fill the available space
Exactly same as `flex: 1`

`flexShrink: 1`
Will shrink the item if the other items overflow
Exactly same as `flex: -1`

By default all components have relative positioning(relative to their parents position without changing the layout around them)
When absolute the layout around will get affected

## Styling

### Borders

By applying minimum value of 50 to `borderRadius` we can get a circular view

### Shadows

Have different properties for iOS and Android

#### iOS

        shadowColor: 'red',
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 1, //0 means no shadow and 1 means dark
        shadowRadius: 10

#### Android

`elevation: 20`
Android doesn't give much control over shadows as on iOS, only gives elevation

### Padding & Margins

**paddingLeft/Right/Top/Bottom** overrides **paddingHorizontal/Vertical** overrides **padding**  **marginLeft/Right/Top/Bottom** overrides **marginHorizontal/Vertical** overrides **margin**  

### Text Styling

iOS and Android have different fonts. So have to use the Platform API to the detect the platform and load fonts that are supported
[Custom fonts can also be used](https://docs.expo.io/guides/using-custom-fonts/)
Text based properties can only be used in Text component
**In React Native there is no style Inheritance**

#### Encapsulating Styles

We can create a custom text component so the styling will be same across all screens

### Icons

<https://docs.expo.io/guides/icons/>
<https://icons.expo.fyi/>

### Platform specific code

    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'

    Platform.select({
        ios: {
            fontSize: 20,
            fontFamily: 'Avenir'
        },
        android: {
            fontSize: 18,
            fontFamily: 'Roboto'
        }
    })

We can have completely different implementations if we want different behaviors depending on platform by having different files
AppText.js
AppText.ios.js
AppText.android.js

import AppText from './app/components/AppText';

React Native will import the correct implementation

### Organizing Styles

We can also use a folder to organize a component and it's styles
Refer Heading component
Import would look like below
`import Heading from './app/components/Heading/Heading';`
To fix it we can add an index.js file which we can use to refer the folder
`import Heading from './app/components/Heading';`
Above is extra work and increases complexity
