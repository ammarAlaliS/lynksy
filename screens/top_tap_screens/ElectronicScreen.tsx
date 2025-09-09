import { View } from 'react-native';
import React from 'react';
import { selectTheme } from '@/store/slices/themeSlice';
import { useSelector } from 'react-redux';
import ProductCard from '@/components/product/ProductCard';


const ElectronicScreen = () => {
  const themeColors = useSelector(selectTheme);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeColors.background,
      }}
    >
     
    </View>
  );
};

export default ElectronicScreen;
