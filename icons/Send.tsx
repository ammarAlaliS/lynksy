import React from 'react';
import Svg, { Path } from 'react-native-svg'; // Path debe importarse aquí
import IconTypes from '@/interfaces/IconProps';

const SendIcon: React.FC<IconTypes> = ({ width, height, color, style }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      style={style}
    >
      <Path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </Svg>
  );
};

export default SendIcon;
