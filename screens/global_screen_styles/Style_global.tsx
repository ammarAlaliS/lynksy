import { selectTheme } from "@/store/slices/themeSlice";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const useGlobalStyles = () => {

  const themeColors = useSelector(selectTheme);

  return  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.background,
      paddingTop:100
    },
    scene: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: themeColors.white || '#fff',
    },
  });
};

  