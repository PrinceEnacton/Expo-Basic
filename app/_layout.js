import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: "#f4511e",
        // },
        // headerTintColor: "#fff",
        // title: "My home",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
        // headerTitleAlign: "center",
        // headerBackVisible: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default Layout;
