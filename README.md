# react-native-first-app

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


Debugging
- Can use metro bundler device log to check
- Remote debugging via chrome
- Debug in VSCode (launch.json)

React Native has it's own components and will map them to native widgets 
Example: 
**View** (similar to div in web)  
iOS UIView  
Android AndroidView

We use function components, simpler and light weight
