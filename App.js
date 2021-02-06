// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar, useWindowDimensions, ScrollView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AppText from './app/components/AppText';
import Heading from './app/components/Heading';

export default function App() {
  console.log("App executed!");
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  const windowWidth = useWindowDimensions().width;
  const { landscape } = useDeviceOrientation();

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
      <Heading>Hello React Native!!</Heading>
      <Text numberOfLines={2} ellipsizeMode={'middle'} onPress={handlePress}>My name is Tanushka Bandara, I'm a Software Engineer at Codegen International</Text>
      <AppText>Custom Text component</AppText>
      <MaterialCommunityIcons name="face-profile" size={60} color="pink" />
      <TouchableOpacity>
        <Image
          style={styles.image}
          blurRadius={1}
          source={require('./app/assets/profile.png')}
        />
      </TouchableOpacity>

      <Button
        color="orange"
        title="Alert Me.."
        onPress={() => Alert.alert("Alert Button", "Alerted", [
          { text: "Yes", onPress: () => console.log("Yes") },
          { text: "No", onPress: () => console.log("No") }
        ])}
      />
      <Button
        color="yellow"
        title="Prompt Me.."
        onPress={() => Alert.prompt("Prompt Button", "Enter message", text => console.log(text))}
      />

      <View style={styles.borderView} />
      <View style={styles.shadowView}>
        <View style={styles.paddingView}></View>
      </View>

      <View style={styles.flexView}>
        <View style={{
          backgroundColor: "dodgerblue",
          // flex: 1
          width: 100,
          height: 70,
          // alignSelf: "flex-start"
        }} />
        <View style={{
          backgroundColor: "gold",
          // flex: -1,
          width: 80,
          height: 50
        }} />
        <View style={{
          backgroundColor: "tomato",
          // flex: 1
          width: 80,
          height: 50
        }} />
        <View style={{
          backgroundColor: "green",
          // flex: 1
          width: 100,
          height: 50
        }} />
      </View>

      <View style={{
        backgroundColor: 'red',
        width: windowWidth,
        height: landscape ? '100%' : '20%'
      }} />


      {/* <Image  source={{
        blurRadius:10,
        width:200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} /> */}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  borderView: {
    backgroundColor: 'limegreen',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderTopWidth: 20,
    borderBottomWidth:20,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#0FF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexView: {
    height: 200,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap"
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  paddingView: {
    width: 50,
    height: 50,
    backgroundColor: 'gold',
  },
  shadowView: {
    backgroundColor: 'yellowgreen',
    width: 100,
    height: 100,
    shadowColor: 'red',
    shadowOffset: { width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
    padding: 20,
    paddingHorizontal: 10,
    padding: 30,
    margin: 20,
    marginLeft: 50
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
