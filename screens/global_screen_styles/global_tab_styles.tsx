import { View, Text, StyleSheet } from "react-native";
import { selectTheme } from "@/store/slices/themeSlice";
import { useSelector } from "react-redux";

export const useGlobalStyles = () => {
  const themeColors = useSelector(selectTheme);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      height: 60,
      backgroundColor: themeColors.background,
      borderTopWidth: 1,
      borderTopColor: themeColors.border,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return {
    ...styles,
    activeIconColor: themeColors.white,
    inactiveIconColor: themeColors.inactiveIconColor,
  };
};

  