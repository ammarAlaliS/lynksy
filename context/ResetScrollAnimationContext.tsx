import { Animated } from "react-native";

// Función separada para resetear scroll y animaciones
export const ResetScrollAnimation = ({
  headerTranslateY,
  HeaderOpacity,
  StoriesTranslateY,
  StoriesOpacity,
}: {
  headerTranslateY: Animated.Value;
  HeaderOpacity: Animated.Value;
  StoriesTranslateY: Animated.Value;
  StoriesOpacity: Animated.Value;
}) => {
  Animated.parallel([
    Animated.timing(headerTranslateY, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }),
    Animated.timing(HeaderOpacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }),
    Animated.timing(StoriesTranslateY, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }),
    Animated.timing(StoriesOpacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }),
  ]).start();
};
