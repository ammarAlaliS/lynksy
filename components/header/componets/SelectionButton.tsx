import React, { useRef, useState, useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, LayoutChangeEvent } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '@/store/slices/activeMenuSlice';
import { Product, setProducts } from '@/store/slices/ProductSlice';
import { homeDataByCategories } from '@/constants/Rifles';
import { RootState } from '@/store';

const initialCategories = ["Todo", "Perfumes", "Electrónica", "Moda", "Hogar", "Ropa"];

interface ThemeColors {
  green: string;
  gray: string;
  text_icon_is_active: string;
  text_icon_is_not_active: string;
}

interface SelectionButtonProps {
  themeColors: ThemeColors;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({ themeColors }) => {
  // const [activeCategory, setActiveCategory] = useState(initialCategories[0]);
  const activeCategory  = useSelector((state: RootState) => state.activeMenu.selectedCategory);
  const dispatch = useDispatch();
  const scrollRef = useRef<ScrollView>(null);
  const buttonPositions = useRef<Record<string, number>>({});

  const handleLayout = (category: string) => (event: LayoutChangeEvent) => {
    const { x } = event.nativeEvent.layout;
    buttonPositions.current[category] = x;
  };

  const filterAndSetProductByCategory = (category: string) => {
  // Buscar la categoría que coincida
  const categoryData = homeDataByCategories.find(cat => cat.categoria.toLowerCase() === category.toLowerCase());

  

  if (categoryData) {
    // Mapeamos de Rifa[] a Product[]
    const products: Product[] = categoryData.content.rifas.map(rifa => ({
      id: rifa.id,
      name: rifa.titulo,
      price: rifa.precio,
      description: rifa.descripcion,
      image: rifa.image
     
    }));
    dispatch(setProducts(products));
  } else {
    dispatch(setProducts([])); 
  }
};


  const handlePress = useCallback((category: string) => {
    dispatch(addCategory(category));
    filterAndSetProductByCategory(category);

    const buttonX = buttonPositions.current[category];
    scrollRef.current?.scrollTo({ x: buttonX, animated: true });
  }, [dispatch]);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center',  marginHorizontal:10 }}
    >
      {initialCategories.map((categoria) => (
        <TouchableOpacity
          key={categoria}
          onLayout={handleLayout(categoria)}
          onPress={() => handlePress(categoria)}
          style={{
            backgroundColor: categoria === activeCategory ? themeColors.green : themeColors.gray,
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 999,
            marginRight: 8,
          }}
        >
          <Text
            style={{
              color:
                categoria === activeCategory
                  ? themeColors.text_icon_is_active
                  : themeColors.text_icon_is_not_active,
              fontWeight: categoria === activeCategory ? '700' : '700',
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
