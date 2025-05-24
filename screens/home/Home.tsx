import React, { useRef } from 'react';
import { ScrollView, View, Text, Animated } from 'react-native';
import { useGlobalStyles } from "../global_screen_styles/Style_global";
import StoriesViewer from "@/components/Stories/StoriesViewer";
import RifaCard from "@/components/rifles/RiflesCard";
import HeaderTitle from '@/components/header/componets/Title';
import { selectTheme } from '@/store/slices/themeSlice';
import { useSelector } from 'react-redux';
import GeneralTitle from '@/components/General_title';
import Icons from '@/components/Icon';
import { Icon } from 'react-native-elements';
import { ejemploRifas } from '@/constants/Rifles';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext';
import Rifles_home_body from '@/components/home/Rifles_home_body';

const Home = ({ setSwipeEnabled }: any) => {
  const GlobalStyles = useGlobalStyles();
  const themeColors = useSelector(selectTheme);
  
  // Definimos la animación (aunque no esté animándose aún)
      const { headerTranslateY } = useHeaderAnimation();
  return (
    <Animated.View
      style={{
        transform: [{ translateY: headerTranslateY }],
        flex:1,
        backgroundColor: themeColors.background,
        zIndex: 10,
        position: 'absolute',
        top: 48,
        left: 0,
        right: 0, 
        bottom:0,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderColor: themeColors.border,
    
      }}
    >
      <ScrollView>
        <StoriesViewer />
        <Rifles_home_body themeColors={themeColors}/>
      </ScrollView>
    </Animated.View>
  );
};

export default Home;
