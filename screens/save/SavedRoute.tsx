import { View, Text, StyleSheet } from "react-native";
import { useGlobalStyles } from "../global_screen_styles/Style_global";

const SavedRoute = () => {
  const GlobalStyles = useGlobalStyles();

  return (
    <View style={[
      GlobalStyles.scene,
      GlobalStyles.container
    ]}>
      <Text style={GlobalStyles.text}>Guardados</Text>
    </View>
  )
}

export default SavedRoute