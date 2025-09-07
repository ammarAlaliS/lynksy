import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/themeSlice'

const HeaderLogo = () => {
      const themeColors = useSelector(selectTheme);
    return (
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
           

        }}>
            <Text
                style={{
                    color: themeColors.green,
                    fontSize: 30,
                    lineHeight:36,
                    fontWeight:700
                }}
            >NicMarket</Text>
            
        </View>
    )
}

export default HeaderLogo