// HomeTopTabs.tsx
import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigationState } from "@react-navigation/native";

// Redux
import { selectTheme } from "@/store/slices/themeSlice";
import { homeDataByCategories } from "@/constants/Rifles";
import { Product, setProducts } from "@/store/slices/ProductSlice";

// Screens
import Home from "@/screens/home/Home";
import PerfumScreen from "@/screens/top_tap_screens/PerfumScreen";
import ElectronicScreen from "@/screens/top_tap_screens/ElectronicScreen";
import FashionScreen from "@/screens/top_tap_screens/FashionScreen";
import HomeItemsScreen from "@/screens/top_tap_screens/HomeItemsScreen";

// Components
import CategoryButton from "@/components/header/CategoryButtom";
import Rifles_home_body from "@/components/home/Rifles_home_body";

const TopTab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
  const dispatch = useDispatch();
  const themeColors = useSelector(selectTheme);

  const activeTabRouteName = useNavigationState((state) => {
    const tabState = state.routes.find((r) => r.name === "HomeTopTabs")?.state;
    if (!tabState) return null;
    return tabState.routes[tabState.index]?.name;
  });

  useEffect(() => {
    if (!activeTabRouteName) return;
    const categoryData = homeDataByCategories.find(
      (cat) => cat.categoria.toLowerCase() === activeTabRouteName.toLowerCase()
    );

    if (categoryData) {
      const products: Product[] = categoryData.content.rifas.map((rifa) => ({
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

  const renderTabLabel = (categoria: string) => ({ focused }: any) =>
    focused ? (
      <CategoryButton categoria={categoria} activeCategory={categoria} />
    ) : (
      <Text style={{ color: themeColors.white, fontWeight: "700" }}>{categoria}</Text>
    );

    const SetParameter = () =>  <Rifles_home_body themeColors={themeColors} />

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: { backgroundColor: themeColors.background },
        tabBarItemStyle: { width: "auto", display: "flex" },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "700", color: themeColors.white },
        tabBarIndicatorStyle: { height: 0, width: 0 },
        tabBarPressColor: "transparent",
      }}
    >
      <TopTab.Screen name="Todos" component={SetParameter} options={{ tabBarLabel: renderTabLabel("Todos") }} />
      <TopTab.Screen name="Perfumes" component={PerfumScreen} options={{ tabBarLabel: renderTabLabel("Perfumes") }} />
      <TopTab.Screen name="Electrónica" component={ElectronicScreen} options={{ tabBarLabel: renderTabLabel("Electrónica") }} />
      <TopTab.Screen name="Moda" component={FashionScreen} options={{ tabBarLabel: renderTabLabel("Moda") }} />
      <TopTab.Screen name="HomeItem" component={HomeItemsScreen} options={{ tabBarLabel: renderTabLabel("Hogar") }} />
    </TopTab.Navigator>
  );
};

export default HomeTopTabs;
