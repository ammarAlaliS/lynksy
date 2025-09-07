import React, { createContext, useContext, useRef } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type HeaderAnimationContextType = {
  headerTranslateY: Animated.Value;
  StoriesTranslateY: Animated.Value;
  StoriesOpacity: Animated.Value;
  HeaderOpacity: Animated.Value;
  hideHeader: () => void;
  showHeader: () => void;
  HideStories: () => void;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const HeaderAnimationContext = createContext<HeaderAnimationContextType | null>(null);

export const HeaderAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesOpacity = useRef(new Animated.Value(1)).current;
  const HeaderOpacity = useRef(new Animated.Value(1)).current;

  const lastScrollY = useRef(0);

  const hideHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: -60,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const showHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const HideStories = () => {
    Animated.parallel([
      Animated.timing(StoriesTranslateY, {
        toValue: -150,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(StoriesOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;

    // --- Stories ---
    const storiesTranslate = Math.min(currentY, 150); // llega hasta -150
    StoriesTranslateY.setValue(-storiesTranslate);

    const storiesOpacity = currentY <= 95 ? 1 - currentY / 50 : 0;
    StoriesOpacity.setValue(storiesOpacity);

    // --- Header solo si scroll > 95 ---
    if (currentY > 95) {
      const headerClamped = Math.min(currentY - 95, 60); // comienza desde scroll = 95
      headerTranslateY.setValue(-headerClamped);
      HeaderOpacity.setValue(Math.max(1 - headerClamped / 60, 0));
    } else {
      headerTranslateY.setValue(0);
      HeaderOpacity.setValue(1);
    }

    lastScrollY.current = currentY;
  };

  return (
    <HeaderAnimationContext.Provider
      value={{
        headerTranslateY,
        StoriesTranslateY,
        StoriesOpacity,
        HeaderOpacity,
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
