import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Details = () => {
    const { id } = useLocalSearchParams() 
  return (
    <View>
      <Text>Movies details: {id}</Text>
    </View>
  )
}

export default Details
