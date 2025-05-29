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
            paddingLeft:10

        }}>
            <Text
                style={{
                    color: themeColors.green,
                    fontSize: 30,
                    lineHeight:36,
                    fontWeight:700
                }}
            >RifflesOne</Text>
            <Image
                source={icons.logo}
                style={{ width: 36, height: 36 }}
                resizeMode="contain"
            />
        </View>
    )
}

export default HeaderLogo