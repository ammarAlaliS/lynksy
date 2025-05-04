import { View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store';
import { useGlobalStyles } from '../global_screen_styles/global_tab_styles';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext';
import { HeaderComponent } from '@/components/header/Header';


const MessageScreen = () => {
  const { headerTranslateY } = useHeaderAnimation();
  const index = useSelector((state: RootState) => state.tabIndex.index);
  const themeColors = useSelector(selectTheme);

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent themeColors={themeColors} headerTranslateY={headerTranslateY} />
    </View>
  );
};

export default MessageScreen;