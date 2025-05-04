import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Icons from '@/components/Icon'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from './icons/Notification'

interface TouchableIconProps {
  icon?: JSX.Element;
  title: string;
  themeColors: any
}


const HeaderTitle: React.FC<TouchableIconProps> = ({ title, themeColors, icon }) => {

  const navigation = useNavigation<NavigationProp>();

  const handleOnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{
      height: 50,
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between'
    }}>

      <View style={{
      height: 50,
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:10
    }}>
        <Icons
          onPress={handleOnPress}
          style={{
            backgroundColor: themeColors.green,
            width: 32,
            height: 32,
            borderRadius: 9999,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          icon={<Icon name="arrow-back" color={themeColors.background} />}
        />
        <Text style={{
          color: themeColors.green,
          fontSize: 24,
          lineHeight: 36,
          fontWeight: 700,

        }}>
          {title}
        </Text>
      </View>
      <View>
      <Icons
          onPress={() => null}
          style={{
            backgroundColor: themeColors.green,
            width: 32,
            height: 32,
            borderRadius: 9999,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          icon={<Icon name="more-vert" color={themeColors.background} />}
        />
      </View>
    </View>
  )
}

export default HeaderTitle