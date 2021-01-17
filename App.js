import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  console.log("App executed!")
  const handlePress = () => console.log("Text Pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!!</Text>
      <Text numberOfLines={2} ellipsizeMode={'middle'} onPress={handlePress}>My name is Tanushka Bandara, I'm a Software Engineer at Codegen International</Text>
      <Image style={styles.image} source={require('./assets/profile.png')} />
      {/* <Image  source={{
        blurRadius:10,
        width:200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain' 
  }
});
