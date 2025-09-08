import { routes } from '@/routes/Routes';
import { useGlobalStyles } from '@/screens/global_screen_styles/global_tab_styles';

import MarketRoute from '@/screens/market/MarketRoute';
import SavedRoute from '@/screens/save/SavedRoute';
import SettingsRoute from '@/screens/setting/SettingsRoute';
import { addCategory } from '@/store/slices/activeMenuSlice';
import * as React from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const globalTabStyle = useGlobalStyles();

  const renderScene = SceneMap({
    saved: SavedRoute,
    market: MarketRoute,
    settings: SettingsRoute,
  });

  function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={globalTabStyle.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null}
      />
      <View style={globalTabStyle.tabBar}>
        {routes.map((route, i) => (
          <TouchableOpacity
            key={route.key}
            style={globalTabStyle.tabItem}
            onPress={() => {
              setIndex(i)
              console.log(i)
              console.log(route)
              // if (i === 'Todos') {
              //   dispatch(addCategory(i));
              // }
            }}
          >
            <Icon
              name={route.icon}
              size={24}
              color={index === i ? globalTabStyle.activeIconColor : globalTabStyle.inactiveIconColor}
            />
            <Text
              style={{
                color: index === i ? globalTabStyle.activeIconColor : globalTabStyle.inactiveIconColor,
                fontSize: 12,
              }}
            >
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
