import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const HeaderLogo = ({themeColors}: any) => {
    return (
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'

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