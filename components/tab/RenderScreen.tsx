import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useGlobalStyles } from '@/screens/global_screen_styles/global_tab_styles';
import { routes } from '@/routes/Routes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';

import MarketRoute from '@/screens/market/MarketRoute';
import SavedRoute from '@/screens/save/SavedRoute';
import SettingsRoute from '@/screens/setting/SettingsRoute';
import { HomeRoute } from '@/StackNavigator';


export default function RenderScreen( {index, setIndex}: any) {
  const layout = useWindowDimensions();


  const dispatch = useDispatch();

  const renderScene = SceneMap({
    home: HomeRoute,
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
