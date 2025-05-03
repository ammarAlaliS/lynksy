import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/ScreenType'; 
import Icons from '@/components/Icon';
import NotificationCounts from '@/components/NotificationCounts';

type NavigationProp = StackNavigationProp<RootStackParamList, 'HomeRoute'>;

interface Props {
  themeColors: any;
  setShowHeader: (value: boolean) => void;
  setTextTitle: (text: string) => void;
  setShowNotificationTitile: (value: boolean) => void;
}

const NotificationIcon = ({
  themeColors,
  setShowHeader,
  setTextTitle,
  setShowNotificationTitile,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  const handleOnPress = () => {
    setShowHeader(false);
    setTextTitle('Notificaciones');
    setShowNotificationTitile(true);
    navigation.navigate('Notification');
  };

  return (
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
      view={
        <NotificationCounts
          themeColors={themeColors.background}
          count={1}
        />
      }
      icon={
        <Icon
          name="notifications"
          color={themeColors.background}
        />
      }
    />
  );
};

export default NotificationIcon;
