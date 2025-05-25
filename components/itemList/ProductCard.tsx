import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';

interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  fechaSorteo: string;
  imagen: string;
  numerosDisponibles: number;
  numerosTotales: number;
}

interface ProductCardProps {
  ejemploProducts: Product[];
  onPressDetalles?: (Product: Product) => void;
  item: any
}

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth * 1;
const itemHeight = 440;

const ProductCard: React.FC<ProductCardProps> = ({ ejemploProducts, onPressDetalles, item}) => {
  const themeColors = useSelector(selectTheme);

    return (
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: themeColors.backgroundSection,
            borderColor: themeColors.border,
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: item.imagen }}
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

        <TouchableOpacity
          onPress={() => onPressDetalles?.(item)}
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
    );
  };

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    width: itemWidth,
    height: itemHeight,
    justifyContent: 'space-between',
    marginTop: 5,
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
