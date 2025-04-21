import { ProductCard, productos } from "@/components/Product";
import { icons } from "@/constants/icons";
import { useAnimatedHeader } from "@/hooks/handleScroll";
import { IndexProps } from "@/types/IndexProps";
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index({ themeColors }: any) {
  const { headerTranslateY, handleScroll } = useAnimatedHeader();

  return (
    <SafeAreaView 
      style={{ flex: 1, backgroundColor: themeColors.background }}
    >
      <StatusBar backgroundColor={themeColors.background} barStyle="light-content" />

      {/* Animated Header */}
      <Animated.View
        style={{
          transform: [{ translateY: headerTranslateY }],
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: themeColors.background,
          zIndex: 10,
          alignItems: "center",
          display: 'flex',
          flexDirection:'row',
          borderBottomWidth:1,
          borderColor: themeColors.border
        }}
      >
        <Text className=" text-white font-bold text-3xl">RifflesOne</Text>
        <Image
          source={icons.logo}
          style={{ width: 64, height: 64 }}
          resizeMode="contain"
        />
        <View>

        </View>
      </Animated.View>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={{
          paddingTop: 64,
          paddingBottom: 64,
          backgroundColor: themeColors.flastlistColor
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
