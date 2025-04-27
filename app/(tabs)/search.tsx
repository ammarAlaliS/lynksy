import { View, Text } from 'react-native'
import React from 'react'
import { IndexProps } from '@/types/IndexProps'

const search = ({ onScroll }: any) => {
  return (
    <View>
      <Text 
        style={{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'red'
        }}
      >search</Text>
    </View>
  )
}

export default search