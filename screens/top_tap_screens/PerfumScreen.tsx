import { View, Text } from 'react-native'
import React from 'react'
import ProductCard from '@/components/product/ProductCard'
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import SearchBar from '@/components/SearchComponent';


const PerfumScreen = () => {
    const themeColors = useSelector(selectTheme);
  return (
    <View style={{
      flex:1,
      backgroundColor: themeColors.background
    }}>
  
    
    </View>
  )
}

export default PerfumScreen