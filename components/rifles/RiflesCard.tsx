import { selectTheme } from '@/store/slices/themeSlice';
import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

interface Rifa {
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
  onPressDetalles?: (rifa: Rifa) => void;
}

const RifaCard: React.FC<RifaCardProps> = ({ ejemploRifas, onPressDetalles }) => {
  const screenWidth = Dimensions.get('window').width;
  const themeColors = useSelector(selectTheme);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {ejemploRifas.map((rifa) => (
        <View
          key={rifa.id}
          style={{
            backgroundColor: themeColors.backgroundSection,
            borderRadius: 10,
            padding: 10,
            borderWidth:1,
            borderColor: themeColors.border,
            width: screenWidth * 0.7,
            marginRight: 16,
            height: 440, 
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: rifa.imagen }}
              style={{ width: '100%', height: 200, borderRadius: 10, backgroundColor:'transparent' }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, color: themeColors.green }}>{rifa.titulo}</Text>
            <Text style={{ fontSize: 14, marginVertical: 5, color: themeColors.white }}>{rifa.descripcion}</Text>
            <Text style={{ fontSize: 12, marginVertical: 5, color: themeColors.white }}>
              💰 Precio:
              <Text style={{ fontSize: 12, marginVertical: 5, color: themeColors.green }}> ${rifa.precio}</Text>

            </Text>
            <Text style={{ fontSize: 12, marginVertical: 5, color: themeColors.white }}>🎉 Sorteo: {new Date(rifa.fechaSorteo).toLocaleDateString()}</Text>
            <Text style={{ fontSize: 12, marginVertical: 5, color: themeColors.white }}>🎟️ Disponibles: {rifa.numerosDisponibles}/{rifa.numerosTotales}</Text>
          </View>

          <View style={{
            marginTop: 10,

          }}>
            <TouchableOpacity
              onPress={() => onPressDetalles?.(rifa)}
              style={{
                backgroundColor: themeColors.green,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                borderRadius: 9999
              }}
            >
              <Text style={{
                  fontSize: 14,
                  marginVertical: 5,
                  color: themeColors.text_icon_is_active,
                  fontWeight:700
                  
              }}>Detalles
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default RifaCard;
