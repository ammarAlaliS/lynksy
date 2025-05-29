import { View, Text, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductInfo from '@/components/product/ProductInfo';
import HeaderTitle from '@/components/header/componets/Title';

const ProductDetails = () => {
  const route = useRoute();
  const { image, titulo, descripcion, price, date, available }: any = route.params;
  const navigation = useNavigation()
const item = {
  image,
  titulo,
  descripcion,
  precio: price,
  fechaSorteo: date,
  numerosDisponibles: available,

};

useLayoutEffect(() => {
  navigation.setOptions({
    title: item.titulo
  });
}, [navigation, item.titulo]);


  return (
    <SafeAreaView>
      <ProductInfo item={item} />
    </SafeAreaView>
  );
};

export default ProductDetails;
