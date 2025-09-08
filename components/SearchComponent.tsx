import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";
import XMarkIcon from "../icons/XMarkIcon";

interface SearchBarProps {
  searchText: string;
  onChangeSearch: (text: string) => void;
  onClearSearch: () => void;
  onPressSearchIcon: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  onChangeSearch,
  onClearSearch,
  onPressSearchIcon,
}) => {
  const themeColors = useSelector(selectTheme);

  return (
    <View
      style={{
        flex: 1,
        marginTop:10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 9999,
          backgroundColor: themeColors.backgroundSection,
          borderWidth: 1,
          borderColor: themeColors.border,
        }}
      >
        <Icon
          name="search"
          size={20}
          color={themeColors.green}
          style={{ padding: 8 , marginLeft:6}}
          onPress={onPressSearchIcon}
        />

        <TextInput
          style={{
            flex: 1,
            paddingVertical: 8,
            paddingRight: 16,
            fontFamily: "PlusJakartaSans-SemiBold",
            color: themeColors.white,
          }}
          placeholder="Busca por nombre o código"
          placeholderTextColor={themeColors.white}
          onChangeText={onChangeSearch}
          value={searchText}
          underlineColorAndroid="transparent"
        />

        {searchText.length > 0 && (
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={onClearSearch}
          >
            <XMarkIcon color={themeColors.white} height={25} width={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
