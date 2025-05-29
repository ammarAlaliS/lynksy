import { View, Text } from 'react-native'
import React from 'react'
import ProductCard from '@/components/product/ProductCard'
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import ItemList from '@/components/product/ItemList';

const HomeItemsScreen = () => {
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

export default HomeItemsScreen