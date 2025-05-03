
import Home from "./screens/home/Home";
import Index from "./screens/Index";
import { Stack } from "./utils/StackConfig";
import Notification from './screens/notification/Notication'

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="HomeRoute" component={HomeRoute} />
    </Stack.Navigator>
  );
}

export function HomeRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  )
}

