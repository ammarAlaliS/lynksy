// StackNavigator.tsx
import Index from "./screens/Index";
import NoticationScreen from "./screens/notification/NoticationScreen";
import { NativeStack } from "./utils/StackConfig";

export function StackNavigator() {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Index" component={Index} />
      <NativeStack.Screen
        name="Notification"
        component={NoticationScreen}
        options={{
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      />
    </NativeStack.Navigator>
  );
}
