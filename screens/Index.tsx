import { View, Text } from 'react-native';
import React from 'react';
import HeaderComponent from '@/components/header/Header';
import { useAnimatedHeader } from '@/hooks/handleScroll';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import HomeRiffles from '@/HomeRiffles';
import TabViewExample from '@/components/tab/TabViewRender';

const Index = () => {
  const { headerTranslateY, setShowHeader, showHeader } = useAnimatedHeader();
  const themeColors = useSelector(selectTheme);

  return (
    <View style={{flex:1}}>
      <HeaderComponent
        headerTranslateY={headerTranslateY}
        setShowHeader={setShowHeader}  
        themeColors={themeColors}
        showHeader={showHeader}
      />
     <TabViewExample/>
    </View>
  );
};

export default Index;
