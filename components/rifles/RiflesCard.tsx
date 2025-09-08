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
import { useNavigation } from '@react-navigation/native';

interface Rifa {
  image: string | undefined;
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  fechaSorteo: string;
  imagen: string;
  numerosDisponibles: number;
  numerosTotales: number;
}

interface RifaCardProps {
  ejemploRifas: Rifa[];
}

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth * 0.90;
const itemHeight = 440;

const RifaCard: React.FC<RifaCardProps> = ({ ejemploRifas }) => {
  const themeColors = useSelector(selectTheme);
  const naginate = useNavigation();

  const renderItem = ({ item }: { item: Rifa }) => {
    return (
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: themeColors.background,
            borderColor: themeColors.border,
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
          onPress={() => {
            naginate.navigate("ProductDetails", {
       image: item.image,
              titulo: item.titulo,
              descripcion: item.descripcion,
              price: item.precio,
              date: item.fechaSorteo,
              available: item.numerosDisponibles
            });
          }}

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

  return (
    <Carousel
      width={screenWidth}
      height={itemHeight}
      data={ejemploRifas}
      renderItem={renderItem}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.95, // Escala del item activo
        parallaxScrollingOffset: 70,  // Cuánto se alejan los items adyacentes
        parallaxAdjacentItemScale: 0.85, // Escala de los adyacentes
      }}
      style={{ alignSelf: 'center' }} // Opcional: asegura centrado visual
      defaultIndex={1} // Opcional: carga empezando con el segundo
      loop={true}
      autoPlay={false}
      pagingEnabled={true}
    />

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 10,
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

export default RifaCard;
