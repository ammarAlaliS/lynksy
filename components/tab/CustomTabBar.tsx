import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from '@/routes/Routes';
import { useGlobalStyles } from '@/screens/global_screen_styles/global_tab_styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setIndex } from '@/store/slices/tabIndexSlice';


const CustomTabBar = ({ index, setIndex} : any) => {
  const globalTabStyle = useGlobalStyles();
  const dispatch = useDispatch();
  

  return (
    <View style={globalTabStyle.tabBar}>
      {routes.map((route, i) => (
        <TouchableOpacity
          key={route.key}
          style={globalTabStyle.tabItem}
          onPress={() => dispatch(setIndex(i))}
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
  );
};

export default CustomTabBar;
