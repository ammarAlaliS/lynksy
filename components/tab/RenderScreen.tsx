import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { routes } from '@/routes/Routes';
import { useDispatch } from 'react-redux';
import MarketRoute from '@/screens/market/MarketRoute';
import SavedRoute from '@/screens/save/SavedRoute';
import SettingsRoute from '@/screens/setting/SettingsRoute';
import Home from '@/screens/home/Home';

export default function RenderScreen({ index, setIndex }: any) {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const [swipeEnabled, setSwipeEnabled] = React.useState(false);

  const renderScene = SceneMap({
    home: () => <Home />,
    saved: SavedRoute,
    market: MarketRoute,
    settings: SettingsRoute,
  });

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(i) => dispatch(setIndex(i))}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null}
        swipeEnabled={swipeEnabled}
      />
    </View>
  );
}
