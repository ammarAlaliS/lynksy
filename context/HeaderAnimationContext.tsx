
import React, { createContext, useContext, useRef } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

type HeaderAnimationContextType = {
  headerTranslateY: Animated.Value;
  hideHeader: () => void;
  showHeader: () => void;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const HeaderAnimationContext = createContext<HeaderAnimationContextType | null>(null);

export const HeaderAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);

  const hideHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: -50,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showHeader = () => {
    Animated.timing(headerTranslateY, {
      toValue: 0,
      duration: 900,
      useNativeDriver: true,
    }).start();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;
    const diff = currentY - lastScrollY.current;

    if (diff > 5) {
      hideHeader();
    } else if (diff < -5) {
      showHeader();
    }

    lastScrollY.current = currentY;
  };

  return (
    <HeaderAnimationContext.Provider
      value={{
        headerTranslateY,
        hideHeader,
        showHeader,
        handleScroll,
      }}
    >
      {children}
    </HeaderAnimationContext.Provider>
  );
};

export const useHeaderAnimation = () => {
  const context = useContext(HeaderAnimationContext);
  if (!context) {
    throw new Error('useHeaderAnimation must be used within a HeaderAnimationProvider');
  }
  return context;
};
