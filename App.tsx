import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StatusBarWithTheme from "./components/statusBar";
import { StackNavigator } from "./StackNavigator";
import { HeaderAnimationProvider } from "./context/HeaderAnimationContext";


export default function RootLayout() {
  return (
    <Provider store={store}>
      <HeaderAnimationProvider>
        <StatusBarWithTheme />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </HeaderAnimationProvider>
    </Provider>
  );
}
