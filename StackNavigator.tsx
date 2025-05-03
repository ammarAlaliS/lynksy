// StackNavigator.tsx
import Index from "./screens/Index";
import Notification from './screens/notification/Notication';
import { NativeStack } from "./utils/StackConfig";

export function StackNavigator() {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Index" component={Index} />
      <NativeStack.Screen
        name="Notification"
        component={Notification}
        options={{
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      />
    </NativeStack.Navigator>
  );
}
