import { View, Text, Dimensions } from "react-native";
import React from "react";
import ScrollWrapper from "@/utils/ScrollWrapper";
import ProductOffer from "./ProductOffer";

const { width } = Dimensions.get("window");
const spacing = 10; // espacio entre items
const itemWidth = (width - spacing * 3) / 2; // 2 columnas + padding

const DefaultCategory = ({ themeColors }: any) => {
  return (
    <ScrollWrapper>
      
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
  
    </ScrollWrapper>
  );
};

export default DefaultCategory;
