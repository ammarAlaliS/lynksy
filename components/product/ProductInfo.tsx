import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';

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

interface Props {
  item: Product;
}

const ProductInfo: React.FC<Props> = ({ item }: any) => {
  const themeColors = useSelector(selectTheme);

  return (
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: themeColors.background },
        ]}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={[styles.title, { color: themeColors.green }]}>
          {item.titulo}
        </Text>

        <Text style={[styles.description, { color: themeColors.white }]}>
          {item.descripcion}
        </Text>

        <Text style={[styles.price, { color: themeColors.white }]}>
          💰 Precio:
          <Text style={{ color: themeColors.green }}> ${item.precio}</Text>
        </Text>

        <Text style={[styles.date, { color: themeColors.white }]}>
          🎉 Sorteo: {new Date(item.fechaSorteo).toLocaleDateString()}
        </Text>

        <Text style={[styles.available, { color: themeColors.white }]}>
          🎟️ Disponibles: {item.numerosDisponibles}/{item.numerosTotales}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 10,
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
});

export default ProductInfo;
