import { View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store';
import CustomTabBar from '@/components/tab/CustomTabBar';
import { setIndex } from '@/store/slices/tabIndexSlice';
import RenderScreen from '@/components/tab/RenderScreen';
import { useGlobalStyles } from './global_screen_styles/Style_global';
import { HeaderComponent } from '@/components/header/Header';
import StoriesViewer from '@/components/Stories/StoriesViewer';

const Index = () => {

  const index = useSelector((state: RootState) => state.tabIndex.index);
  const themeColors = useSelector(selectTheme);
  const globalTabStyle = useGlobalStyles();

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent themeColors={themeColors} />
      
      <View style={globalTabStyle.container}>
        <RenderScreen index={index} setIndex={setIndex} />
      </View>
       <CustomTabBar index={index} setIndex={setIndex} />
    </View>
  );
};

export default Index;

