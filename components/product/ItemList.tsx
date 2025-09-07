import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import SearchBar from "../SearchComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ProductCard from "./ProductCard";
import { useHeaderAnimation } from "@/context/HeaderAnimationContext";

const ItemList = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const handleSearchSubmit = () => {
    console.log("Buscar:", searchText);
  };

  const { handleScroll } = useHeaderAnimation();
  return (
    <ScrollView
      style={{ paddingHorizontal: 10, flex: 1 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
    >
      <SearchBar
        searchText={searchText}
        onChangeSearch={handleSearchChange}
        onClearSearch={handleClearSearch}
        onPressSearchIcon={handleSearchSubmit}
      />

      <ProductCard />
    </ScrollView>
  );
};

export default ItemList;
