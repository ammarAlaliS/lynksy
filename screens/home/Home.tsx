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
        top: 50,
        left: 0,
        right: 0, 
        bottom:0,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderColor: themeColors.border,
        paddingVertical: 8,
      }}
    >
      <ScrollView>
        <StoriesViewer />
        <View style={{

          marginTop: 4,
          marginBottom: 3,
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          
        }}>
          <View style={{
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: themeColors.border,
            backgroundColor: themeColors.backgroundSection,
            paddingHorizontal: 10
          }}>
            <GeneralTitle
              icon={
                <Icon
                  name="spray-can"
                  type="font-awesome-5"
                  color={themeColors.white}
                />
              }
              title={'Perfumes'}
              themeColors={themeColors}
              icon_two={
                <Icons
                  onPress={() => null}
                  style={{
                    backgroundColor: themeColors.green,
                    width: 32,
                    height: 32,
                    borderRadius: 9999,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                  icon={<Icon name="chevron-right" color={themeColors.background} />}
                />
              }
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <RifaCard ejemploRifas={ejemploRifas} />
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Home;
