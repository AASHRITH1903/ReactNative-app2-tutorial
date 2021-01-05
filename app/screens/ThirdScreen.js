import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
