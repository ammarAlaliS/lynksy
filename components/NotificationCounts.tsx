import { View, Text } from 'react-native';
import React from 'react';

const NotificationCounts = ({ themeColors, count }: any) => {

  if (count === null || count === 0) {
    return null;
  }

  return (
    <View
      style={{
        minWidth: 22,
        minHeight: 22,
        backgroundColor: 'red',
        position: 'absolute',
        top: -10,
        left: 16,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: themeColors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:2
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 10,
          fontWeight: '900',
          color: '#fff',
        }}
      >
        {count}
      </Text>
    </View>
  );
};

export default NotificationCounts;

