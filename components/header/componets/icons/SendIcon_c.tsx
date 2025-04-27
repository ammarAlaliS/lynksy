import { View, Text } from 'react-native'
import React from 'react'
import Icons from '@/components/Icon'
import SendIcon from '@/icons/Send'

const SendIcon_c = ({themeColors}: any) => {
    return (
        <Icons
            onPress={() => console.log('Send pressed')}
            icon={<SendIcon width={18} height={24} color={themeColors.background} />}
            style={{
                backgroundColor: themeColors.green,
                width: 32,
                height: 32,
                borderRadius: 9999,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        />
    )
}

export default SendIcon_c