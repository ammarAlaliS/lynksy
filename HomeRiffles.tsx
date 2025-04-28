
import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ProductCard, productos } from '@/components/Product'

const HomeRiffles = ({handleScroll , themeColors }: any) => {
  return (
    <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 64,
          backgroundColor: themeColors.background
        }}
        ListHeaderComponent={
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, color: themeColors.text, fontWeight: 'bold' }}>
              Productos en rifa
            </Text>
          </View>
        }
      />
  )
}

export default HomeRiffles