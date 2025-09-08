import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Icons from '@/components/Icon'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from './header/componets/icons/Notification'

interface TouchableIconProps {
  icon?: JSX.Element;
  icon_two?: JSX.Element;
  title: string;
  themeColors: any
}


const GeneralTitle: React.FC<TouchableIconProps> = ({ title, themeColors, icon, icon_two }) => {

  const navigation = useNavigation<NavigationProp>();

  const handleOnPress = () => {

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
       {icon}
        <Text style={{
          color: themeColors.text_general_title,
          fontSize: 24,
          lineHeight: 36,
          fontWeight: 700,

        }}>
          {title}
        </Text>
      </View>
      <View>
        {icon_two}
      </View>
    </View>
  )
}

export default GeneralTitle