import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setTextTitle, setShowNotificationTitle } from '@/store/slices/headerSlice';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext';

export const useNotificationNavigation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      dispatch(setTextTitle(''));
      dispatch(setShowNotificationTitle(false));
    });

    return unsubscribe;
  }, [navigation, dispatch]);
};
