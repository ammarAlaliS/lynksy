import { useSelector } from "react-redux";
import { StatusBar } from "react-native";
import { selectTheme, selectDarkMode } from "@/store/slices/themeSlice";

export default function StatusBarWithTheme() {
  const themeColors = useSelector(selectTheme);
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <StatusBar
      backgroundColor={themeColors.background}
      barStyle={isDarkMode ? "light-content" : "dark-content"}
    />
  );
}
