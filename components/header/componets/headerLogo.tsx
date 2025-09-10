import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";

const HeaderLogo = () => {
  const themeColors = useSelector(selectTheme);
  const [isUserLogin, setUserLogin] = useState(true); // true = avatar, false = NicMarket

  return isUserLogin ? (
    <TouchableOpacity
      style={{
        flexDirection: "row",
       
      }}
    >
      <View
        style={{
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Image
          source={{
            uri: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676",
          }}
          style={{
            width: 40,// 👈 un poco más pequeño que el contenedor
            height: 40,
            borderRadius: 28,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 5,
          padding:5
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            color: themeColors.green,
            
       
          }}
        >
          Hola, Bienvenido👋
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
            color: themeColors.text_general_title,
            marginRight:10
          }}
        >
          Andrea Cisne
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: themeColors.green,
          fontSize: 30,
          lineHeight: 36,
          fontWeight: "700",
        }}
      >
        NicMarket
      </Text>
    </View>
  );
};

export default HeaderLogo;
