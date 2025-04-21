import { icons } from "@/constants/icons";
import { View, Image, Text } from "react-native";

// Definición del tipo Producto
export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: any; // También puedes usar: ImageSourcePropType
  descripcion: string;
};

// Componente ProductCard
export const ProductCard = ({ product }: { product: Producto }) => {
  return (
    <View className="bg-dark-card p-4 rounded-lg my-2">
      <Image source={product.imagen} className="w-full h-40 rounded" resizeMode="contain" />
      <Text className="text-white text-lg font-bold mt-2">{product.nombre}</Text>
      <Text className="text-gray-300 text-sm mt-1">{product.descripcion}</Text>
      <Text className="text-primary text-lg font-bold mt-2">${product.precio}</Text>
    </View>
  );
};

// Datos de productos
export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  },
  {
    id: 2,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  },
  {
    id: 3,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  },
  {
    id: 4,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  },
  {
    id: 5,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  },
  {
    id: 6,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  },
  {
    id: 7,
    nombre: "Smartphone Premium",
    precio: 899.99,
    imagen: icons.arrow,
    descripcion: "El último smartphone con cámara de 108MP y pantalla AMOLED"
  }
];
