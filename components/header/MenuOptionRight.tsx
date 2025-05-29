import { View, Text } from 'react-native'
import React from 'react'
import ToggleMode from './componets/icons/toggleMode'
import NotificationIcon from './componets/icons/Notification'
import SendIcon_c from './componets/icons/SendIcon_c'

const MenuOptionRight = ({themeColors}: any) => {

  return (
    <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              paddingRight:10
            }}
          >
            <ToggleMode themeColors={themeColors} />
            <NotificationIcon themeColors={themeColors} />
            <SendIcon_c themeColors={themeColors} />
          </View>
  )
}

export default MenuOptionRight