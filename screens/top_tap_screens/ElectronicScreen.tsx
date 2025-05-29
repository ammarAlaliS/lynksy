import { View, Text } from 'react-native'
import React from 'react'
import { selectTheme } from '@/store/slices/themeSlice';
import { useSelector } from 'react-redux';
import ProductCard from '@/components/product/ProductCard';
import ItemList from '@/components/product/ItemList';

const ElectronicScreen = () => {
   const themeColors = useSelector(selectTheme);
  return (
    <View style={{
      flex:1,
      backgroundColor: themeColors.background
    }}>
      <ItemList/>
    </View>
  )
}

export default ElectronicScreen