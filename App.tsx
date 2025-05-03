import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StatusBarWithTheme from "./components/statusBar";
import { StackNavigator } from "./StackNavigator";


export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBarWithTheme />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
