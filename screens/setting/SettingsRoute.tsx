import { View, Text, StyleSheet } from "react-native";
import { useGlobalStyles } from "../global_screen_styles/Style_global";

const SettingsRoute = () => {
  const global_style = useGlobalStyles();
  
  return (
    <View style={[
      global_style.scene,
      global_style.container
    ]
      }>
      <Text style={global_style.text}>Configuración</Text>
    </View>
  );
};

export default SettingsRoute;
