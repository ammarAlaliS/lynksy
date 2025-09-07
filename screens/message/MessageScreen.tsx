import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store';
import { useGlobalStyles } from '../global_screen_styles/global_tab_styles';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext';
import { HeaderComponent } from '@/components/header/Header';
import HeaderTitle from '@/components/header/componets/Title';
import { useNotificationNavigation } from '@/hooks/useNotificationNavigation';


const MessageScreen = () => {
  const { headerTranslateY } = useHeaderAnimation();
  const index = useSelector((state: RootState) => state.tabIndex.index);
  const themeColors = useSelector(selectTheme);
  const textTitle = useSelector((state: RootState) => state.header.textTitle);

  useNotificationNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background}}>
           <HeaderTitle themeColors={themeColors} title={textTitle} />
    </SafeAreaView>
  );
};

export default MessageScreen;