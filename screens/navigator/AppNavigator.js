import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home/Home";
import ImageCarousel from "../home/Carousel";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Images'
        component={ImageCarousel}
        options={{ headerTitle: "Image Slider" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
