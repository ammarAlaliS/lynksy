import { View, Text } from 'react-native'
import React from 'react'
import Icons from '@/components/Icon'
import SendIcon from '@/icons/Send'
import NotificationCounts from '@/components/NotificationCounts'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from './Notification'
import { useDispatch } from 'react-redux'
import { useHeaderAnimation } from '@/context/HeaderAnimationContext'
import { setShowNotificationTitle, setTextTitle } from '@/store/slices/headerSlice'

const SendIcon_c = ({themeColors}: any) => {
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useDispatch();
  
    const handleOnPress = () => {
      dispatch(setTextTitle('Mensajes'));
      dispatch(setShowNotificationTitle(true));
      navigation.navigate('MessageScreen'); 
    };
    return (
        <Icons
            onPress={() => handleOnPress()}
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