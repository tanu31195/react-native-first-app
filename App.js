// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  console.log("App executed!")
  const handlePress = () => console.log("Text Pressed")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Hello React Native!!</Text>
      <Text numberOfLines={2} ellipsizeMode={'middle'} onPress={handlePress}>My name is Tanushka Bandara, I'm a Software Engineer at Codegen International</Text>
      <TouchableOpacity>
        <Image
          style={styles.image}
          blurRadius={1}
          source={require('./assets/profile.png')}
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

      {/* <Image  source={{
        blurRadius:10,
        width:200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FF',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
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
