// HomeTopTabs.tsx
import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

// Screens
import PerfumScreen from "@/screens/top_tap_screens/PerfumScreen";
import ElectronicScreen from "@/screens/top_tap_screens/ElectronicScreen";
import FashionScreen from "@/screens/top_tap_screens/FashionScreen";
import HomeItemsScreen from "@/screens/top_tap_screens/HomeItemsScreen";

// Components
import CategoryButton from "@/components/header/CategoryButtom";
import Rifles_home_body from "@/components/home/Rifles_home_body";
import { Icon } from "react-native-elements";
import Icons from "@/components/Icon";

// Redux
import { selectTheme } from "@/store/slices/themeSlice";
import { useNavigation } from "@react-navigation/native";

const TopTab = createMaterialTopTabNavigator();


const HomeTopTabs = () => {
  const themeColors = useSelector(selectTheme);
  const navigation = useNavigation()

  const renderTabLabel =
    (categoria: string) =>
      ({ focused }: any) =>
        focused ? (
          <CategoryButton categoria={categoria} activeCategory={categoria} />
        ) : (
          <Text style={{ color: themeColors.white, fontWeight: "700" }}>
            {categoria}
          </Text>
        );

  const SetParameter = () => <Rifles_home_body themeColors={themeColors} />;

  return (
    <View style={{ flex: 1 }}>
      <TopTab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: { backgroundColor: themeColors.background, marginRight: 40 },
          tabBarItemStyle: { width: "auto", display: "flex" },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "700", color: themeColors.white },
          tabBarIndicatorStyle: { height: 0, width: 0 },
          tabBarPressColor: "transparent",
        }}
      >
        <TopTab.Screen
          name="Todos"
          component={SetParameter}
          options={{ tabBarLabel: renderTabLabel("Todos") }}
        />
        <TopTab.Screen
          name="Perfumes"
          component={PerfumScreen}
          options={{ tabBarLabel: renderTabLabel("Perfumes") }}
        />
        <TopTab.Screen
          name="Electrónica"
          component={ElectronicScreen}
          options={{ tabBarLabel: renderTabLabel("Electrónica") }}
        />
        <TopTab.Screen
          name="Moda"
          component={FashionScreen}
          options={{ tabBarLabel: renderTabLabel("Moda") }}
        />
        <TopTab.Screen
          name="HomeItem"
          component={HomeItemsScreen}
          options={{ tabBarLabel: renderTabLabel("Hogar") }}
        />
      </TopTab.Navigator>

      {/* Botón de búsqueda flotante */}
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 0,
          backgroundColor: themeColors.background,
          borderRadius: 9999,
          padding: 4,
        }}
      >
        <Icons
     onPress={() => navigation.getParent()?.navigate("Search")}
          style={{
            backgroundColor: themeColors.green,
            width: 36,
            height: 36,
            borderRadius: 9999,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5
          }}
          icon={
            <Icon
              name="search"
              type="font-awesome"
              solid={false}
              size={20}
              color={themeColors.background}
              style={{ transform: [{ rotate: "0deg" }], marginBottom:2}}
            />
          }
        />
      </View>
    </View>
  );
};

export default HomeTopTabs;
