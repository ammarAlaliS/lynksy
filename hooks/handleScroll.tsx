import { useRef, useState } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export function useAnimatedHeader(initialOffset = 0, hideOffset = 50) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const headerTranslateY = useRef(new Animated.Value(initialOffset)).current;
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;
    const diff = currentY - lastScrollY.current;

    if (diff > 5 && showHeader) {
      setShowHeader(false);
      Animated.timing(headerTranslateY, {
        toValue: -hideOffset,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    if (diff < -5 && !showHeader) {
      setShowHeader(true);
      Animated.timing(headerTranslateY, {
        toValue: initialOffset,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    lastScrollY.current = currentY;
  };

  const toggleHeader = (visible: boolean) => {
    setShowHeader(visible);

    Animated.timing(headerTranslateY, {
      toValue: visible ? initialOffset : -hideOffset,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return {
    headerTranslateY,
    handleScroll,
    setShowHeader: toggleHeader,
    showHeader
  };
}
