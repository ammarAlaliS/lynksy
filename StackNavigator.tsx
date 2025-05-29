// StackNavigator.tsx

import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Redux Theme
import { selectTheme } from './store/slices/themeSlice';

// Components
import HeaderLogo from './components/header/componets/headerLogo';
import MenuOptionRight from './components/header/MenuOptionRight';

// Screens
import Home from './screens/home/Home';
import Saved from './screens/Saved';
import MarketRoute from './screens/market/MarketRoute';
import ProductDetails from './screens/product_details/ProductDetails';
import PerfumScreen from './screens/top_tap_screens/PerfumScreen';
import ElectronicScreen from './screens/top_tap_screens/ElectronicScreen';
import CategoryButton from './components/header/CategoryButtom';

// Top Tab
const TopTab = createMaterialTopTabNavigator();

import { useNavigationState } from '@react-navigation/native';
import FashionScreen from './screens/top_tap_screens/FashionScreen';
import HomeItemsScreen from './screens/top_tap_screens/HomeItemsScreen';
import { homeDataByCategories } from './constants/Rifles';
import { Product, setProducts } from './store/slices/ProductSlice';

function HomeTopTabs() {
  const dispatch = useDispatch();
  const themeColors = useSelector(selectTheme);

  // Obtener el nombre del tab activo dentro del TopTab
  const activeTabRouteName = useNavigationState((state) => {
    const tabState = state.routes.find(r => r.name === 'Home')?.state;
    if (!tabState) return null;
    return tabState.routes[tabState.index].name;
  });

  useEffect(() => {
    if (!activeTabRouteName) return;

    const categoryData = homeDataByCategories.find(
      cat => cat.categoria.toLowerCase() === activeTabRouteName.toLowerCase()
    );

    if (categoryData) {
      const products: Product[] = categoryData.content.rifas.map(rifa => ({
        id: rifa.id,
        name: rifa.titulo,
        price: rifa.precio,
        description: rifa.descripcion,
        image: rifa.image,
      }));
      dispatch(setProducts(products));
    } else {
      dispatch(setProducts([]));
    }
  }, [activeTabRouteName, dispatch]);

  // Función para evitar repetir lógica de tabBarLabel
  const renderTabLabel = (categoria: string) => ({ focused }) =>
    focused
      ? <CategoryButton categoria={categoria} activeCategory={categoria} />
      : <Text style={{ color: themeColors.white, fontWeight: '700' }}>{categoria}</Text>;

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: themeColors.background,
        },
        tabBarItemStyle: {
          width: 'auto',
          display: 'flex',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '700',
          color: themeColors.white,
        },
        tabBarIndicatorStyle: {
          height: 0,
          width: 0,
        },
        tabBarPressColor: 'transparent',
      }}
    >
      <TopTab.Screen name="Todos" component={Home} options={{ tabBarLabel: renderTabLabel('Todos') }} />
      <TopTab.Screen name="Perfumes" component={PerfumScreen} options={{ tabBarLabel: renderTabLabel('Perfumes') }} />
      <TopTab.Screen name="Electrónica" component={ElectronicScreen} options={{ tabBarLabel: renderTabLabel('Electrónica') }} />
      <TopTab.Screen name="Moda" component={FashionScreen} options={{ tabBarLabel: renderTabLabel('Moda') }} />
      <TopTab.Screen name="HomeItem" component={HomeItemsScreen} options={{ tabBarLabel: renderTabLabel('Hogar') }} />
    </TopTab.Navigator>
  );
}


// Bottom Tabs
const Tab = createBottomTabNavigator();
function BottomTabs() {
  const themeColors = useSelector(selectTheme);
  const navigation = useNavigation();

  const CustomTabBarButton = (props) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Saved':
              iconName = focused ? 'bookmark' : 'bookmark-outline';
              break;
            case 'Market':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Icon name={iconName} type="ionicon" size={size} color={color} />;
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarStyle: {
          height: 60,
          backgroundColor: themeColors.background,
          borderTopWidth: 0.2,
          borderColor: themeColors.border,
        },
        headerShown: false,
        tabBarActiveTintColor: themeColors.green,
        tabBarInactiveTintColor: '#8e8e93',
      })}
    >
      <Tab.Screen name="Home" component={HomeTopTabs} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Market" component={MarketRoute} />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                  name="settings-outline"
                  type="ionicon"
                  size={24}
                  color={
                    props.accessibilityState?.selected
                      ? themeColors.green
                      : '#8e8e93'
                  }
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: props.accessibilityState?.selected
                      ? themeColors.green
                      : '#8e8e93',
                  }}
                >
                  Settings
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      >
        {() => null}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// Stack (para navegación tipo modal o detalle)
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          presentation: 'formSheet',
        }}
      />
    </Stack.Navigator>
  );
}

// Drawer (navegador principal)
const Drawer = createDrawerNavigator();
export function StackNavigator() {
  const themeColors = useSelector(selectTheme);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => <HeaderLogo />,
        headerRight: () => <MenuOptionRight themeColors={themeColors} />,
        headerTitle: '',
        headerStyle: {
          backgroundColor: themeColors.background,
          height: 55,
          borderBottomWidth: 0,
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
      }}
    >

      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

