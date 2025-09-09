import React, { createContext, useContext, useRef } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type MenuAnimationContextType = {
  MenuTranslateY: Animated.Value;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  HideMenu: () => void;
  ShowMenu: () => void;
};

const MenuAnimationContext = createContext<MenuAnimationContextType | null>(null);

export const MenuAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const MenuTranslateY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);

  const HideMenu = () => {
    Animated.timing(MenuTranslateY, {
      toValue: 100, // se baja fuera de pantalla
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const ShowMenu = () => {
    Animated.timing(MenuTranslateY, {
      toValue: 0, // vuelve a la posición original
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;
    const diff = currentY - lastScrollY.current;

    // si scrolleo hacia abajo -> esconder menú
    if (diff > 0) {
      MenuTranslateY.setValue(Math.min(MenuTranslateY.__getValue() + diff, 100));
    }
    // si scrolleo hacia arriba -> mostrar menú
    else if (diff < 0) {
      MenuTranslateY.setValue(Math.max(MenuTranslateY.__getValue() + diff, 0));
    }

    lastScrollY.current = currentY;
  };

  return (
    <MenuAnimationContext.Provider
      value={{
        MenuTranslateY,
        handleScroll,
        HideMenu,
        ShowMenu,
      }}
    >
      {children}
    </MenuAnimationContext.Provider>
  );
};

export const useMenuAnimation = () => {
  const context = useContext(MenuAnimationContext);
  if (!context) {
    throw new Error("useMenuAnimation must be used within a MenuAnimationProvider");
  }
  return context;
};
