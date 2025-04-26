
import { ProductCard, productos } from "@/components/Product";
import { icons } from "@/constants/icons";
import { useAnimatedHeader } from "@/hooks/handleScroll";
import SendIcon from "@/icons/Send";
import { DarkTheme } from "@react-navigation/native";
import { Icon } from 'react-native-elements'


import React from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@/components/Icon";
import NotificationCounts from "@/components/NotificationCounts";

export default function Index({ themeColors }: any) {
  const { headerTranslateY, handleScroll } = useAnimatedHeader();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: themeColors.background }}
    >
      <Animated.View
        style={{
          transform: [{ translateY: headerTranslateY }],
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: themeColors.background,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          borderBottomWidth: 1,
          borderColor: themeColors.border,
          paddingHorizontal: 16,
          paddingVertical: 8
        }}
      >
        <View className=" flex flex-row items-center justify-between py-2">
          <View className=" flex flex-row">
            <Text 
            className=" font-extrabold text-3xl"
            style={{
              color: themeColors.green
            }}
            >RifflesOne</Text>
            <Image
              source={icons.logo}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          </View>
          <View className=" flex flex-row gap-x-4">
            <Icons
              onPress={() => console.log('Send pressed')}
              style={{
                backgroundColor: themeColors.green,
                width: 32,
                height: 32,
                borderRadius: 9999,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              view={
                <NotificationCounts
                  themeColors={themeColors.background}
                  count={0}
                />
              }
              icon={
                <Icon
                  name='notifications'
                  color={themeColors.background}
                  type=""
                />

              }

            />
            <Icons
              onPress={() => console.log('Send pressed')}
              icon={<SendIcon width={18} height={24} color={themeColors.background} />}
              style={{
                backgroundColor: themeColors.green,
                width: 32,
                height: 32,
                borderRadius: 9999,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />

          </View>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{

            alignItems: 'center',
          }}
        >
          {["Perfumes", "Electrónica", "Moda", "Hogar"].map((categoria, index, arr) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: themeColors.gray,
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 999,
                marginRight: index !== arr.length - 1 ? 8 : 0,
              }}
              className=" font-bold"
            >
              <Text style={{ color: 'white' }}>{categoria}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </Animated.View>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={{
          paddingTop: 84,
          paddingBottom: 64,
          backgroundColor: themeColors.background
        }}
        ListHeaderComponent={
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, color: themeColors.text, fontWeight: 'bold' }}>
              Productos en rifa
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
