import { View, Text } from 'react-native';
import React from 'react';
import HeaderComponent from '@/components/header/Header';
import { useAnimatedHeader } from '@/hooks/handleScroll';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import HomeRiffles from '@/HomeRiffles';
import TabViewExample from '@/components/tab/TabViewRender';
import { RootState } from '@/store';
import CustomTabBar from '@/components/tab/CustomTabBar';
import { setIndex } from '@/store/slices/tabIndexSlice';
import RenderScreen from '@/components/tab/TabNavigator';

const Index = () => {
  const { headerTranslateY, setShowHeader, showHeader } = useAnimatedHeader();
  const index = useSelector((state: RootState) => state.tabIndex.index);

  const themeColors = useSelector(selectTheme);

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        headerTranslateY={headerTranslateY}
        setShowHeader={setShowHeader}
        themeColors={themeColors}
        showHeader={showHeader}
      />
      {/* aqui es donde se renderizan las pantallas y si abre una nueva no deberia de perder el layout */}
      <RenderScreen
        index={index}
        setIndex={setIndex}
      />

      {/* aqui esta el menu de navegacion */}
      <CustomTabBar
         index={index}
         setIndex={setIndex}
      />
    </View>
  );
};

export default Index;
