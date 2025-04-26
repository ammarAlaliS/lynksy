import React from 'react';
import { TouchableOpacity, GestureResponderEvent, ViewStyle } from 'react-native';

interface TouchableIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  icon: JSX.Element;
  view?: JSX.Element;
  style?: ViewStyle;
}

const Icons: React.FC<TouchableIconProps> = ({ onPress, icon, style, view }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style}>
      {icon}
      {view}
    </TouchableOpacity>
  );
};

export default Icons;

