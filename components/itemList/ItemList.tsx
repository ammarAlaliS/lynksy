import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../SearchComponent';
import { ProductCard } from '../Product';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const ItemList = () => {
  const [searchText, setSearchText] = useState('');
  const products = useSelector((state: RootState) => state.products.products);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleSearchSubmit = () => {
    console.log('Buscar:', searchText);
  };

  // Filtrar por nombre
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
      <SearchBar
        searchText={searchText}
        onChangeSearch={handleSearchChange}
        onClearSearch={handleClearSearch}
        onPressSearchIcon={handleSearchSubmit}
      />

        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id.toString()}
            product={{
              id: item.id,
              nombre: item.name,
              precio: item.price,
              imagen: item.image,
              descripcion: item.description,
            }}
          />
        ))}

    </ScrollView>
  );
};

export default ItemList;
