import HeaderComponent from "@/components/header/Header";
import { useAnimatedHeader } from "@/hooks/handleScroll";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeTabs from "./(tabs)/_layout";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";


export default function Index() {
  const { headerTranslateY, handleScroll, setShowHeader, showHeader  } = useAnimatedHeader();
  const themeColors = useSelector(selectTheme);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <HeaderComponent headerTranslateY={headerTranslateY} themeColors={themeColors} setShowHeader={setShowHeader} showHeader={showHeader} />
      <SwipeTabs handleScroll={handleScroll} />
    </SafeAreaView>
  );
}
