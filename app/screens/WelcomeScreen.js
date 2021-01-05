import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen(props) {
  console.log(props.extraData.msg);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.heading}>Sell what you don't want</Text>
      <View style={styles.loginButton} />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => props.navigation.navigate("SecondScreen")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    height: "10%",
    width: "100%",
    backgroundColor: "#ff6666",
  },
  registerButton: {
    height: "10%",
    width: "100%",
    backgroundColor: "#3399ff",
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    top: 100,
  },
  heading: {
    position: "absolute",
    top: 210,
  },
});
