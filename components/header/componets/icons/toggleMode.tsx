import React from 'react';
import Icons from '@/components/Icon';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { selectDarkMode, toggleDarkMode } from '@/store/slices/themeSlice';

const ToggleMode = ({ themeColors }: any) => {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Icons
      onPress={handleToggle}
      style={{
        backgroundColor: themeColors.white,
        width: 32,
        height: 32,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      icon={
        isDarkMode
          ? (
            <Icon
              name="moon"
              color={themeColors.background}
              type="feather"
            />
          ) : (
            <Icon
              name="sun"
              color={isDarkMode ? '#777': '#F3C623'}
              type="feather"
              size={18}
            />
          )
      }
    />
  );
};

export default ToggleMode;
