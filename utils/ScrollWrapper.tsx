import React, { useState } from "react";
import { Animated, RefreshControl } from "react-native";
import { useHeaderAnimation } from "@/context/HeaderAnimationContext";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";

type ScrollWrapperProps = {
  children: React.ReactNode;
  onRefresh?: () => Promise<void>; // Función que ejecuta la recarga
};

const ScrollWrapper = ({ children, onRefresh }: ScrollWrapperProps) => {
  const { handleScroll } = useHeaderAnimation();
  const themeColors = useSelector(selectTheme);

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
  };

  return (
    <Animated.ScrollView
      style={{ flex: 1, paddingHorizontal: 10, backgroundColor: themeColors.background }}
      contentContainerStyle={{ paddingBottom: 100 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          tintColor={themeColors.black} 
          colors={[themeColors.black]} // color del circulito en Android
        />
      }
    >
      {children}
    </Animated.ScrollView>
  );
};

export default ScrollWrapper;
