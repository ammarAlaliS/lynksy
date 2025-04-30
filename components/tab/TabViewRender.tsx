import * as React from 'react';
import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4caf50' }]}>
    <Text style={styles.text}>Inicio</Text>
  </View>
);

const SavedRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#2196f3' }]}>
    <Text style={styles.text}>Guardados</Text>
  </View>
);

const MarketRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff9800' }]}>
    <Text style={styles.text}>Marketplace</Text>
  </View>
);

const SettingsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#9c27b0' }]}>
    <Text style={styles.text}>Configuración</Text>
  </View>
);

const routes = [
  { key: 'home', title: 'Home', icon: 'home' },
  { key: 'saved', title: 'Saved', icon: 'bookmark' },
  { key: 'market', title: 'Market', icon: 'shopping' },
  { key: 'settings', title: 'Settings', icon: 'account-cog' },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderScene = SceneMap({
    home: HomeRoute,
    saved: SavedRoute,
    market: MarketRoute,
    settings: SettingsRoute,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null} 
      />
      <View style={styles.tabBar}>
        {routes.map((route, i) => (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={() => setIndex(i)}
          >
            <Icon
              name={route.icon}
              size={24}
              color={index === i ? '#000' : '#888'}
            />
            <Text style={{ color: index === i ? '#000' : '#888', fontSize: 12 }}>
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
