import React, { useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '@/types/ScreenType';
import Icons from '@/components/Icon';
import NotificationCounts from '@/components/NotificationCounts';
import { setTextTitle, setShowNotificationTitle } from '@/store/slices/headerSlice';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext'; 
import { useNotificationNavigation } from '@/hooks/useNotificationNavigation';

export type NavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  themeColors: any;
}

const NotificationIcon = ({ themeColors }: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const handleOnPress = () => {
    dispatch(setTextTitle('Notificaciones'));
    dispatch(setShowNotificationTitle(true));
    navigation.navigate('Notification'); 
  };

  useNotificationNavigation();

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
      view={<NotificationCounts themeColors={themeColors.background} count={1} />}
      icon={<Icon name="notifications" color={themeColors.background} />}
    />
  );
};

export default NotificationIcon;
