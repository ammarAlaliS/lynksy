import { routes } from '@/routes/Routes';
import { useGlobalStyles } from '@/screens/global_screen_styles/global_tab_styles';
import HomeRoute from '@/screens/home/HomeRoute';
import MarketRoute from '@/screens/market/MarketRoute';
import SavedRoute from '@/screens/save/SavedRoute';
import SettingsRoute from '@/screens/setting/SettingsRoute';
import * as React from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const globalTabStyle = useGlobalStyles();

  const renderScene = SceneMap({
    home: HomeRoute,
    saved: SavedRoute,
    market: MarketRoute,
    settings: SettingsRoute,
  });

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
            onPress={() => setIndex(i)}
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
