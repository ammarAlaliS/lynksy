import React, { createContext, useContext, useRef } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type HeaderAnimationContextType = {
  headerTranslateY: Animated.Value;
  StoriesTranslateY: Animated.Value;
  hideHeader: () => void;
  showHeader: () => void;
  HideStories: () => void;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const HeaderAnimationContext = createContext<HeaderAnimationContextType | null>(null);

export const HeaderAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesTranslateY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);

  const hideHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: -50,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const HideStories = () => {
    Animated.timing(StoriesTranslateY, {
      toValue: -150, // ocultamos hasta -150
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const showHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;

    // limitamos entre 0 y 150
    const clampedY = Math.min(Math.max(currentY, 0), 150);

    // movemos hacia arriba
    StoriesTranslateY.setValue(-clampedY);

    lastScrollY.current = currentY;
  };

  return (
    <HeaderAnimationContext.Provider
      value={{
        headerTranslateY,
        StoriesTranslateY,
        hideHeader,
        showHeader,
        handleScroll,
        HideStories,
      }}
    >
      {children}
    </HeaderAnimationContext.Provider>
  );
};

export const useHeaderAnimation = () => {
  const context = useContext(HeaderAnimationContext);
  if (!context) {
    throw new Error("useHeaderAnimation must be used within a HeaderAnimationProvider");
  }
  return context;
};
