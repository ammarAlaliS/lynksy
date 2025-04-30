import { View, Text } from 'react-native'
import React from 'react'
import Icons from '@/components/Icon'
import SendIcon from '@/icons/Send'
import NotificationCounts from '@/components/NotificationCounts'

const SendIcon_c = ({themeColors , setShowHeader, setTextTitle , setShowNotificationTitile}: any) => {
    const HandleOnpressSteps = (): void => { 

        setShowHeader(false);
        setTextTitle('Mensajes');
        setShowNotificationTitile(true)
      };
    return (
        <Icons
            onPress={() => HandleOnpressSteps()}
            icon={<SendIcon width={18} height={24} color={themeColors.background} />}
            style={{
                backgroundColor: themeColors.green,
                width: 32,
                height: 32,
                borderRadius: 9999,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            view={
                <NotificationCounts
                    themeColors={themeColors.background}
                    count={0}
                />
            }
        />

    )
}

export default SendIcon_c