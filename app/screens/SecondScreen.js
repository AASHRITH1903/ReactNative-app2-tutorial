import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SecondScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("WelcomeScreen");
        }}
        style={styles.closeButton}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("ThirdScreen");
        }}
        style={styles.deleteButton}
      />

      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  image: {
    height: "70%",
    width: "100%",
  },
  closeButton: {
    height: 70,
    width: 70,
    backgroundColor: "#ff6666",
    position: "absolute",
    top: 15,
    left: 10,
  },
  deleteButton: {
    height: 70,
    width: 70,
    backgroundColor: "#3399ff",
    position: "absolute",
    top: 15,
    right: 10,
  },
});
