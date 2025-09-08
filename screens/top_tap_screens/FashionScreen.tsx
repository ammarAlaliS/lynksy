import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import ProductCard from '@/components/product/ProductCard';
import ItemList from '@/components/product/ItemList';

const FashionScreen = () => {
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

export default FashionScreen