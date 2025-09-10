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
  GestureResponderEvent,

} from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";
import Home from "@/screens/home/Home";
import Saved from "@/screens/Saved";
import MarketRoute from "@/screens/market/MarketRoute";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const themeColors = useSelector(selectTheme);
  const navigation = useNavigation();

  const CustomTabBarButton = (props: { onPress: ((event: GestureResponderEvent) => void) | undefined; children: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = "";

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Saved":
              iconName = focused ? "bookmark" : "bookmark-outline";
              break;
            case "Market":
              iconName = focused ? "cart" : "cart-outline";
              break;
            case "Settings": 
              iconName = focused ? "settings" : "settings-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }

          return (
            <Icon name={iconName} type="ionicon" size={size} color={color} />
          );
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarStyle: {
          backgroundColor: themeColors.background,
          borderTopWidth: 0.2,
          borderColor: themeColors.border,
          position: "absolute",
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // corregido
        },
        headerShown: false,
        tabBarActiveTintColor: themeColors.green,
        tabBarInactiveTintColor: "#8e8e93",
        sceneContainerStyle: {
          backgroundColor: themeColors.gray,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Market" component={MarketRoute} />

      {/* Botón personalizado para abrir el Drawer */}
      <Tab.Screen
        name="Settings"
        options={{
          tabBarButton: (props) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.openDrawer()}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="settings-outline"
                  type="ionicon"
                  size={24}
                  color={
                    props.accessibilityState?.selected
                      ? themeColors.green
                      : "#8e8e93"
                  }
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: props.accessibilityState?.selected
                      ? themeColors.green
                      : "#8e8e93",
                  }}
                >
                  Perfil
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      >
        {() => null}
      </Tab.Screen>
    </Tab.Navigator>
  );
}