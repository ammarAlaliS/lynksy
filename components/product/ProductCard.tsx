import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store';

interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  fechaSorteo: string;
  image: string;
  numerosDisponibles: number;
  numerosTotales: number;
}

const ProductCard = () => {
  const themeColors = useSelector(selectTheme);
  const products = useSelector((state: RootState) => state.products.products);



  const onPressDetalles = (item: Product) => {
    console.log('Detalles de:', item);
  };

  return (
    <ScrollView
      contentContainerStyle={{}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {products.map((item) => (
        <View
          key={item.id}
          style={[
            styles.cardContainer,
            {
              backgroundColor: themeColors.background,
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={[styles.title, { color: themeColors.green }]}>
              {item.name}
            </Text>
            <Text style={[styles.description, { color: themeColors.white }]}>
              {item.description}
            </Text>
            <Text style={[styles.price, { color: themeColors.white }]}>
              💰 Precio:
              <Text style={{ color: themeColors.green }}> ${item.price}</Text>
            </Text>

          </View>

          <TouchableOpacity
            onPress={() => onPressDetalles(item)}
            style={[styles.button, { backgroundColor: themeColors.green }]}
          >
            <Text
              style={[
                styles.buttonText,
                { color: themeColors.text_icon_is_active },
              ]}
            >
              Detalles
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 10,
    marginTop: 2,


  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  price: {
    fontSize: 12,
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    marginVertical: 5,
  },
  available: {
    fontSize: 12,
    marginVertical: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 9999,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ProductCard;
