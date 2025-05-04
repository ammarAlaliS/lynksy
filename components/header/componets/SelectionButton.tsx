import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, LayoutChangeEvent } from 'react-native';

const initialCategories = ["Perfumes", "Electrónica", "Moda", "Hogar", "Ropa"];

const SelectionButton = ({ themeColors }: any) => {
  const [activeCategory, setActiveCategory] = useState(initialCategories[0]);
  const scrollRef = useRef<ScrollView>(null);
  const buttonPositions = useRef<Record<string, number>>({});

  const handleLayout = (category: string) => (event: LayoutChangeEvent) => {
    const { x } = event.nativeEvent.layout;
    buttonPositions.current[category] = x;
  };

  const handlePress = (category: string) => {
    setActiveCategory(category);

    const buttonX = buttonPositions.current[category] || 0;

    // Scroll animado hasta la posición del botón
    scrollRef.current?.scrollTo({
      x: buttonX,
      animated: true,
    });
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
      }}
    >
      {initialCategories.map((categoria) => (
        <TouchableOpacity
          key={categoria}
          onLayout={handleLayout(categoria)}
          onPress={() => handlePress(categoria)}
          style={{
            backgroundColor:
              categoria === activeCategory ? themeColors.green : themeColors.gray,
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 999,
            marginRight: 8,
          }}
        >
          <Text
            style={{
              color: categoria === activeCategory ? themeColors.text_icon_is_active : themeColors. text_icon_is_not_active, // Cambiar el color del texto
              fontWeight:  categoria === activeCategory ? '700' : '500',
            }}
          >
            {categoria}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SelectionButton;
