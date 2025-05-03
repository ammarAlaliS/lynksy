// screens/Index.tsx
import { View } from 'react-native';
import React from 'react';
import HeaderComponent from '@/components/header/Header';
import { useAnimatedHeader } from '@/hooks/handleScroll';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store';
import CustomTabBar from '@/components/tab/CustomTabBar';
import { setIndex } from '@/store/slices/tabIndexSlice';
import RenderScreen from '@/components/tab/RenderScreen';
import { useGlobalStyles } from './global_screen_styles/Style_global';

const Index = () => {
  const { headerTranslateY, setShowHeader, showHeader } = useAnimatedHeader();
  const index = useSelector((state: RootState) => state.tabIndex.index);
  const themeColors = useSelector(selectTheme);
  const globalTabStyle = useGlobalStyles();

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        headerTranslateY={headerTranslateY}
        setShowHeader={setShowHeader}
        themeColors={themeColors}
        showHeader={showHeader}
      />
      {/* Aquí se renderizan las pantallas dentro del layout */}
      <View style={globalTabStyle.container}>
        <RenderScreen
          index={index}
          setIndex={setIndex}
        />
      </View>

      {/* Barra de navegación inferior */}
      <CustomTabBar
        index={index}
        setIndex={setIndex}
      />
    </View>
  );
};

export default Index;
