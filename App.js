import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SecondScreen from "./app/screens/SecondScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ThirdScreen from "./app/screens/ThirdScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" options={{ title: "Welcome" }}>
          {(props) => (
            <WelcomeScreen {...props} extraData={{ msg: "hello message" }} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="SecondScreen"
          options={{ title: "Furniture" }}
          component={SecondScreen}
        />
        <Stack.Screen
          name="ThirdScreen"
          options={{ title: "ThirdScreen" }}
          component={ThirdScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
