import React, { useEffect, useState } from 'react';
import { ScrollView, View, Animated, ActivityIndicator } from 'react-native';
import { useGlobalStyles } from "../global_screen_styles/Style_global";
import StoriesViewer from "@/components/Stories/StoriesViewer";
import Rifles_home_body from "@/components/home/Rifles_home_body";
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext';
import { RootState } from '@/store';
import ItemList from '@/components/product/ItemList';

const Home = () => {
  const GlobalStyles = useGlobalStyles();
  const themeColors = useSelector(selectTheme);
  const activeCategory = useSelector((state: RootState) => state.activeMenu.selectedCategory);

  const { headerTranslateY } = useHeaderAnimation();

  const [loading, setLoading] = useState(false);

  const isTodoSelected = activeCategory.includes('Todo');


  return (
    <Animated.View
      style={{
        transform: [{ translateY: headerTranslateY }],
        flex: 1,
        backgroundColor: themeColors.background,
        zIndex: 10,
        // position: 'absolute',
        // top: 48,
        // left: 0,
        // right: 0,
        // bottom: 0,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderColor: themeColors.border,
      }}
    >
      <View style={{ flexGrow: 1 }}>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 300,
            }}
          >
            <ActivityIndicator size="large" color={themeColors.green} />
          </View>
        ) : (
          <>
            {isTodoSelected ? (
              <ScrollView>
                <StoriesViewer />
                <Rifles_home_body themeColors={themeColors} />
              </ScrollView>
            ) : (
              <ItemList/>
            )}
          </>
        )}
      </View>
    </Animated.View>
  );
};

export default Home;
