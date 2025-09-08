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
import Home from "./screens/home/Home";
import Saved from "./screens/Saved";
import MarketRoute from "./screens/market/MarketRoute";
import ProductDetails from "./screens/product_details/ProductDetails";
import PerfumScreen from "./screens/top_tap_screens/PerfumScreen";
import ElectronicScreen from "./screens/top_tap_screens/ElectronicScreen";
import FashionScreen from "./screens/top_tap_screens/FashionScreen";
import HomeItemsScreen from "./screens/top_tap_screens/HomeItemsScreen";
import NoticationScreen from "./screens/notification/NoticationScreen";
import MessageScreen from "./screens/message/MessageScreen";

// Otros
import CategoryButton from "./components/header/CategoryButtom";
import { homeDataByCategories } from "./constants/Rifles";
import { Product, setProducts } from "./store/slices/ProductSlice";
import SearchScreen from "./screens/search/SearchScreen";


// Bottom Tabs
const Tab = createBottomTabNavigator();
function BottomTabs() {
  const themeColors = useSelector(selectTheme);
  const navigation = useNavigation();

  const CustomTabBarButton = (props) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
            case "Perfil":
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
        },
        headerShown: false,
        tabBarActiveTintColor: themeColors.green,
        tabBarInactiveTintColor: "#8e8e93",
        sceneContainerStyle: {
          backgroundColor: themeColors.background, // 👈 screens del Tab
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Market" component={MarketRoute} />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
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
