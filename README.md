import React, { createContext, useContext, useRef } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type HeaderAnimationContextType = {
  headerTranslateY: Animated.Value;
  StoriesTranslateY: Animated.Value;
  StoriesOpacity: Animated.Value;
  HeaderOpacity: Animated.Value;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const HeaderAnimationContext = createContext<HeaderAnimationContextType | null>(null);

export const HeaderAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesTranslateY = useRef(new Animated.Value(0)).current;
  const StoriesOpacity = useRef(new Animated.Value(1)).current;
  const HeaderOpacity = useRef(new Animated.Value(1)).current;

  const lastScrollY = useRef(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const currentY = contentOffset.y;
    const deltaY = currentY - lastScrollY.current;

    // --- scroll bottom ---
    const scrollBottom = contentSize.height - layoutMeasurement.height - currentY;

    // --- Stories ---
    if (deltaY > 0) {
      // scroll hacia abajo
      StoriesTranslateY.setValue(Math.max(-150, StoriesTranslateY._value - deltaY));
      StoriesOpacity.setValue(Math.max(0, StoriesOpacity._value - deltaY / 70));
    } else if (deltaY < 0 && scrollBottom > 150) {
      // scroll hacia arriba solo si NO estamos cerca del fondo
      StoriesTranslateY.setValue(Math.min(0, StoriesTranslateY._value - deltaY));
      StoriesOpacity.setValue(Math.min(1, StoriesOpacity._value - deltaY / 150));
    }

    // --- Header ---
    if (currentY > 95) {
      if (deltaY > 0) {
        // scroll hacia abajo
        headerTranslateY.setValue(Math.max(-60, headerTranslateY._value - deltaY));
        HeaderOpacity.setValue(Math.max(0, HeaderOpacity._value - deltaY / 60));
      } else if (deltaY < 0 && scrollBottom > 150) {
        // scroll hacia arriba solo si NO estamos cerca del fondo
        headerTranslateY.setValue(Math.min(0, headerTranslateY._value - deltaY));
        HeaderOpacity.setValue(Math.min(1, HeaderOpacity._value - deltaY / 60));
      }
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
        handleScroll,
      }}
    >
      {children}
    </HeaderAnimationContext.Provider>
  );
};

export const useHeaderAnimation = () => {
  const context = useContext(HeaderAnimationContext);
  if (!context) throw new Error("useHeaderAnimation must be used within a HeaderAnimationProvider");
  return context;
};
