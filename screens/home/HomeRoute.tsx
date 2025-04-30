import { View, Text } from "react-native";
import { useGlobalStyles } from "../global_screen_styles/Style_global";

const HomeRoute = () => {
  const GlobalStyles = useGlobalStyles();

  return (
    <View style={[
      GlobalStyles.scene,
      GlobalStyles.container
    ]}>
      <Text style={GlobalStyles.text}>Inicio</Text>
    </View>
  );
};

export default HomeRoute;
