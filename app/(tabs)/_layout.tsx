import React, { useState } from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { TabView } from "react-native-tab-view";
import { icons } from "@/constants/icons";
import Home from "../home";
import Saved from "./saved";
import Search from "./search";
import Profile from "./profile";
import Index from ".";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";

const TabIcon = ({ icon, focused, themeColors }: { icon: any; focused: boolean; themeColors: any }) => (
  <View
    style={{
      borderRadius: 9999,
      justifyContent: "center",
      alignItems: "center",
      padding:12
    }}
  >
    <Image
      source={icon}
      style={{
        width: 24, // You can adjust this size
        height: 24, // You can adjust this size
        tintColor: focused ? themeColors.buttonBackground : themeColors.icon,
      }}
    />
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const SwipeTabs = () => {
  const [index, setIndex] = useState(0);
  const themeColors = useSelector(selectTheme);

  const [routes] = useState([
    { key: "home", icon: icons.home },
    { key: "saved", icon: icons.save },
    { key: "search", icon: icons.search },
    { key: "profile", icon: icons.person },
  ]);

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "home":
        return <Index themeColors={themeColors} />;
      case "saved":
        return <Saved themeColors={themeColors} />;
      case "search":
        return <Search themeColors={themeColors} />;
      case "profile":
        return <Profile themeColors={themeColors} />;
      default:
        return null;
    }
  };

  const renderTabBar = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: themeColors.background, // Dynamically change background color based on theme
   
        height: 56,
        borderTopWidth: 1,
        borderColor: themeColors.border,
        position:'absolute',
        bottom:0,
        left:0,
        right:0
      }}
    >
      {routes.map((route, i) => {
        const focused = index === i;
        return (
          <TouchableOpacity key={route.key} onPress={() => setIndex(i)}>
            <TabIcon icon={route.icon} focused={focused} themeColors={themeColors} />
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={() => null}
        lazy={false}
      />
      {renderTabBar()}
    </>
  );
};

export default SwipeTabs;
