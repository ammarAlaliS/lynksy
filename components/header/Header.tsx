import { Animated, View } from 'react-native';
import HeaderLogo from './componets/headerLogo';
import ToggleMode from './componets/icons/toggleMode';
import NotificationIcon from './componets/icons/Notification';
import SendIcon_c from './componets/icons/SendIcon_c';
import SelectionButton from './componets/SelectionButton';
import HeaderTitle from './componets/Title';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useHeaderAnimation } from '@/context/HeaderAnimationContext';

export const HeaderComponent = ({ themeColors }: any) => {
    const { headerTranslateY } = useHeaderAnimation();
    const textTitle = useSelector((state: RootState) => state.header.textTitle);
    const showNotificationTitle = useSelector(
      (state: RootState) => state.header.showNotificationTitle
    );
  
    return (
      <Animated.View
        style={{
          transform: [{ translateY: headerTranslateY }],
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: themeColors.background,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          borderBottomWidth: 1,
          borderColor: themeColors.border,
          paddingHorizontal: 16,
          paddingVertical: 8,
          height: 100,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 42,
          }}
        >
          <HeaderLogo themeColors={themeColors} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <ToggleMode themeColors={themeColors} />
            <NotificationIcon themeColors={themeColors} />
            <SendIcon_c themeColors={themeColors} />
          </View>
        </View>
  
        <View style={{ height: 42 }}>
          {showNotificationTitle ? (
            <HeaderTitle 
            themeColors={themeColors} 
            title={textTitle} 
            />
          ) : (
            <SelectionButton themeColors={themeColors} />
          )}
        </View>
      </Animated.View>
    );
  };
  