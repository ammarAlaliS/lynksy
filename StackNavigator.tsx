import Home from "./screens/home/Home";
import Index from "./screens/Index";
import Notification from './screens/notification/Notication';
import { NativeStack, Stack } from "./utils/StackConfig";
import { CardStyleInterpolators } from '@react-navigation/stack';

export function StackNavigator() {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Index" component={Index} />
      <NativeStack.Screen name="HomeRoute" component={HomeRoute} />
    </NativeStack.Navigator>
  );
}

export function HomeRoute() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      
     
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          gestureEnabled: true,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: { duration: 500 },
            },
            close: {
              animation: 'timing',
              config: { duration: 500 },
            },
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}
