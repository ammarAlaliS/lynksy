// StackNavigator.tsx
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Icon } from "react-native-elements";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

// Redux Theme
import { selectTheme } from "./store/slices/themeSlice";

// Components
import HeaderLogo from "./components/header/componets/headerLogo";
import MenuOptionRight from "./components/header/MenuOptionRight";

// Screens

import ProductDetails from "./screens/product_details/ProductDetails";

import NoticationScreen from "./screens/notification/NoticationScreen";
import MessageScreen from "./screens/message/MessageScreen";

// Otros

import SearchScreen from "./screens/search/SearchScreen";
import BottomTabs from "./components/menuBottorn/menuBottorn";




// Stack
const Stack = createNativeStackNavigator();
function HomeStack() {
  const themeColors = useSelector(selectTheme);

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: themeColors.background }, // 👈 fondo del Stack
      }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NoticationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false, presentation: "formSheet" }} />
    </Stack.Navigator>
  );
}

// Drawer
const Drawer = createDrawerNavigator();
export function StackNavigator() {
  const themeColors = useSelector(selectTheme);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: () => <HeaderLogo />,
        headerRight: () => <MenuOptionRight themeColors={themeColors} />,
        headerTitle: "",
        headerStyle: {
          backgroundColor: themeColors.background,
          height: 55,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: { height: 0 },
          shadowRadius: 0,
        },
        drawerStyle: {
          backgroundColor: themeColors.background, // 👈 fondo del Drawer
        },
        sceneContainerStyle: {
          backgroundColor: themeColors.background, // 👈 fondo de screens en Drawer
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}
