import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Animated,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useGlobalStyles } from "../global_screen_styles/Style_global";
import StoriesViewer from "@/components/Stories/StoriesViewer";
import Rifles_home_body from "@/components/home/Rifles_home_body";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";
import { useHeaderAnimation } from "@/context/HeaderAnimationContext";
import { RootState } from "@/store";
import ScrollBeheavior from "@/components/product/ItemList";
import { HeaderComponent } from "@/components/header/Header";
import { useNotificationNavigation } from "@/hooks/useNotificationNavigation";
import HomeTopTabs from "@/components/header/homeTopTab/HomeTopTabs";

const Home = () => {
  const GlobalStyles = useGlobalStyles();
  const themeColors = useSelector(selectTheme);
  const activeCategory = useSelector(
    (state: RootState) => state.activeMenu.selectedCategory
  );

  const { headerTranslateY, StoriesTranslateY, StoriesOpacity } =
    useHeaderAnimation();

  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <View style={{ flex: 1, backgroundColor: themeColors.background }}>
        <Animated.View
          style={{
            // transform: [{ translateY: headerTranslateY }],
            flex: 1,
            backgroundColor: themeColors.background,
            // opacity: StoriesOpacity,

            // position: 'absolute',
            // top: 48,
            // left: 0,
            // right: 0,
            // bottom: 0,
            flexDirection: "column",
            zIndex: 20, // siempre encima de stories
          }}
        >
          <View style={{ flexGrow: 1 }}>
            {loading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 300,
                  backgroundColor: themeColors.background,
                }}
              >
                <ActivityIndicator size="large" color={themeColors.green} />
              </View>
            ) : (
              <>
                <HeaderComponent themeColors={themeColors} />
                <Animated.View
                  style={{
                    transform: [{ translateY: StoriesTranslateY }],
                    backgroundColor: themeColors.background,
                    flex: 1,
                    zIndex: 0,
                    position: "absolute",
                    top: 60,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <Animated.View
                    style={{
                      opacity: StoriesOpacity,
                      backgroundColor: themeColors.background,
                    }}
                  >
                    <StoriesViewer />
                  </Animated.View>
                </Animated.View>
                <Animated.View
                  style={{
                    flexGrow: 1,
                    marginTop: 150,
                    transform: [{ translateY: StoriesTranslateY }],
                    height: "100%",
                    paddingBottom: 100,
                    backgroundColor: themeColors.background,
                  }}
                >
                  <HomeTopTabs />
                </Animated.View>
              </>
            )}
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
