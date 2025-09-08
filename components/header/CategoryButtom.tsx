// components/CategoryButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';

interface Props {
  categoria: string;
  activeCategory: string;
}

const CategoryButton = ({ categoria, activeCategory }: Props) => {
  const themeColors = useSelector(selectTheme);
  const isActive = categoria === activeCategory;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? themeColors.green : themeColors.gray,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 999,
        marginRight: 8,
      }}
    >
      <Text
        style={{
          color: isActive
            ? themeColors.text_icon_is_active
            : themeColors.text_icon_is_not_active,
          fontWeight: '700',
        }}
      >
        {categoria}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
