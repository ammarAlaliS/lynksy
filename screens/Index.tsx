import { View, Text } from 'react-native';
import React from 'react';
import HeaderComponent from '@/components/header/Header';
import { useAnimatedHeader } from '@/hooks/handleScroll';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';

const Index = () => {
  const { headerTranslateY, setShowHeader, showHeader } = useAnimatedHeader();
  const themeColors = useSelector(selectTheme);

  return (
    <View>
      <HeaderComponent
        headerTranslateY={headerTranslateY}
        setShowHeader={setShowHeader}  
        themeColors={themeColors}
        showHeader={showHeader}
      />
    </View>
  );
};

export default Index;
