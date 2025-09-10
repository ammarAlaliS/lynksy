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
                  flex: 1,
                  marginTop: 5,
                  borderRadius: 9999,
                }}
              >
                <View
                  style={{
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 9999,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 3,
                      height: 50,
                      width: 50,
                      borderRadius: 9999,
                      backgroundColor: themeColors.green,
                      borderColor: themeColors.black,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: themeColors.background,
                          fontWeight: "800",
                        }}
                      >
                        5%
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: themeColors.background,
                          fontWeight: "800",
                        }}
                      >
                        OFF
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: themeColors.green,
                      fontWeight: "800",
                      fontSize:10,
                      marginTop:8
                    }}
                  numberOfLines={1}
                  >
                    Promotiomes
                  </Text>
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
                    borderColor: story.seen ? "#a3a3a3" : themeColors.white,
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
