// utils/StackConfig.ts
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Crea un stack nativo para las rutas principales
export const NativeStack = createNativeStackNavigator();

// Crea un stack estándar para la pantalla de notificaciones
export const Stack = createStackNavigator();
