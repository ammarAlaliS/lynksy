import { Stack } from "expo-router";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";
import StatusBarWithTheme from "@/components/statusBar";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBarWithTheme />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
      </Stack>
    </Provider>
  );
}
