import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { stories } from "@/constants/Stories";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";

const StoriesViewer = () => {
  const themeColors = useSelector(selectTheme);

  return (
    <View
      style={{
        width: "100%",
        // height: 130,
        maxWidth: 600,
        alignSelf: "center",
        backgroundColor: themeColors.background,
        paddingVertical: 5,
        marginBottom: 10,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 14,
          alignItems: "flex-start",
        }}
      >
        {stories.map((story) => {
          if (story.isLabel) {
            // 🔥 Story especial (Últimos ganadores) → círculo
            return (
              <View
                key={story.id}
                style={{
                  alignItems: "center",
                  width: 60,
                  flex:1
                 
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    overflow: "hidden",
                    justifyContent:'center',
                    flex:1
                   
                  }}
                >
                  <LinearGradient
                   colors={[themeColors.green, themeColors.black]}
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth:6,
                      borderColor: themeColors.border,
                      borderRadius: 30,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Feather name="award" size={20} color="#fff" />
                  </LinearGradient>
                </View>
              </View>
            );
          } else {
            // 🔥 Stories normales en forma de círculo
            return (
              <TouchableOpacity
                key={story.id}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60,
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: story.seen ? "#a3a3a3" : themeColors.green,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: story.avatar }}
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 27,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "500",
                    textAlign: "center",
                    color: themeColors.text_general_title,
                    marginTop: 4,
                    width: 60,
                  }}
                  numberOfLines={1}
                >
                  {story.name}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default StoriesViewer;
