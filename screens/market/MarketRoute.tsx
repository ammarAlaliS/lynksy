import { View, Text, StyleSheet } from "react-native";
import { useGlobalStyles } from "../global_screen_styles/Style_global";

const MarketRoute = () => {
  const GlobalStyles = useGlobalStyles();

  return (
    <View style={[
      GlobalStyles.scene,
      GlobalStyles.container
    ]}>
      <Text style={GlobalStyles.text}>Marketplace</Text>
    </View>
  );
};

export default MarketRoute;

