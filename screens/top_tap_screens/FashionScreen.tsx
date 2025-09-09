import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import ProductCard from '@/components/product/ProductCard';


const FashionScreen = () => {
 const themeColors = useSelector(selectTheme);
  return (
    <View style={{
      flex:1,
      backgroundColor: themeColors.background
    }}>
      
    </View>
  )
}

export default FashionScreen