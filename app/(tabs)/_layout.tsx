import React, { useState } from "react";
import { View, Dimensions, Image, TouchableOpacity, FlatList } from "react-native";
import { TabView } from "react-native-tab-view";
import { icons } from "@/constants/icons";
import Saved from "./saved";
import Search from "./search";
import Profile from "./profile";
import HomeSection from "./home";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";

const TabIcon = ({ icon, focused, themeColors }: { icon: any; focused: boolean; themeColors: any }) => (
  <View style={{
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  }}>
    <Image
      source={icon}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? themeColors.buttonBackground : themeColors.icon,
      }}
    />
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const SwipeTabs = ({ handleScroll }: { handleScroll: (event: any) => void }) => {
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
        return <HomeSection handleScroll={handleScroll} themeColors={themeColors} />;
      case "saved":
        return <Saved onScroll={handleScroll} themeColors={themeColors} />;
      case "search":
        return <Search onScroll={handleScroll} themeColors={themeColors} />;
      case "profile":
        return <Profile onScroll={handleScroll} themeColors={themeColors} />;
      default:
        return null;
    }
  };

  const renderTabBar = () => (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: themeColors.background,
      height: 56,
      borderTopWidth: 1,
      borderColor: themeColors.border,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    }}>
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
