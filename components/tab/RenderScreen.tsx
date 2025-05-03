// components/tab/RenderScreen.tsx
import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { routes } from '@/routes/Routes';
import { useDispatch } from 'react-redux';
import MarketRoute from '@/screens/market/MarketRoute';
import SavedRoute from '@/screens/save/SavedRoute';
import SettingsRoute from '@/screens/setting/SettingsRoute';
import Home from '@/screens/home/Home'; // usamos Home directo

export default function RenderScreen({ index, setIndex }: any) {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();

  const renderScene = SceneMap({
    home: Home,
    saved: SavedRoute,
    market: MarketRoute,
    settings: SettingsRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={(i) => dispatch(setIndex(i))}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => null}
    />
  );
}
