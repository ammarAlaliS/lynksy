import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./screens/Index";
import Saved from "./screens/Saved";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
