import { View, Text } from 'react-native'
import React from 'react'
import Icons from '@/components/Icon'
import NotificationCounts from '@/components/NotificationCounts'
import { Icon } from 'react-native-elements'
import { useNavigation } from 'expo-router'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/types/ScreenType'


const NotificationIcon = ({themeColors , setShowHeader, setTextTitle , setShowNotificationTitile}: any) => {

    const HandleOnpressSteps = (): void => { 

        setShowHeader(false);
        setTextTitle('Notificaciones');
        setShowNotificationTitile(true)
      };
    return (
        <Icons
            onPress={() => HandleOnpressSteps()}
            style={{
                backgroundColor: themeColors.green,
                width: 32,
                height: 32,
                borderRadius: 9999,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
            view={
                <NotificationCounts
                    themeColors={themeColors.background}
                    count={1}
                />
            }
            icon={
                <Icon
                    name='notifications'
                    color={themeColors.background}
                    type=""
                />

            }

        />
    )
}

export default NotificationIcon