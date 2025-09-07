import React, { createContext, useContext, useRef } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type HeaderAnimationContextType = {
  headerTranslateY: Animated.Value;
  StoriesTranslateY: Animated.Value;
  StoriesOpacity: Animated.Value;   // 👈 agregado
  hideHeader: () => void;
  showHeader: () => void;
  HideStories: () => void;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const HeaderAnimationContext = createContext<HeaderAnimationContextType | null>(null);

export const HeaderAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesOpacity = useRef(new Animated.Value(1)).current; // 👈 empieza visible
  const lastScrollY = useRef(0);

  const hideHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: -50,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const HideStories = () => {
    Animated.parallel([
      Animated.timing(StoriesTranslateY, {
        toValue: -50, // se ocultan hacia arriba
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(StoriesOpacity, {
        toValue: 0, // desaparecen
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
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

    // limitamos entre 0 y 50
    const clampedY = Math.min(Math.max(currentY, 0), 100);

    // movimiento hacia arriba
    StoriesTranslateY.setValue(-clampedY);

    // opacidad entre 1 → 0 (Instagram-like)
    const opacity = 1 - clampedY / 50;
    StoriesOpacity.setValue(opacity);

    lastScrollY.current = currentY;
  };

  return (
    <HeaderAnimationContext.Provider
      value={{
        headerTranslateY,
        StoriesTranslateY,
        StoriesOpacity,   
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
