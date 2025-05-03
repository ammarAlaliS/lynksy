import { View, Text } from 'react-native';
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
      {/* aqui es donde se renderizan las pantallas y si abre una nueva no deberia de perder el layout, si yo navego hacia notificacion
      no deberia de perder el layout la pantalla se deberia de renderizar en este view el problema esta que al navegar a notificaciones me
      abre una nueva pnatalla completa y pierdo el header y el customBar */}
      <View style={globalTabStyle.container}>
        <RenderScreen
          index={index}
          setIndex={setIndex}
        />
      </View>


      {/* aqui esta el menu de navegacion */}
      <CustomTabBar
        index={index}
        setIndex={setIndex}
      />
    </View>
  );
};

export default Index;
