import { View, Text } from 'react-native'
import React from 'react'

const HeaderTitle = ({title, themeColors}:any) => {
  return (
    <View  style={{
      height:50,
      display:'flex',
      justifyContent:'center'
    }}>
      <Text style={{
        color: themeColors.green,
        fontSize: 30,
        lineHeight:36,
        fontWeight:700,
    
    }}>{title}</Text>
    </View>
  )
}

export default HeaderTitle