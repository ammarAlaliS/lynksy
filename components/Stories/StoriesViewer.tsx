import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { stories } from '@/constants/Stories';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/themeSlice';

const StoriesViewer = () => {
  const themeColors = useSelector(selectTheme);
  return (
    <View style={{
      width: '100%',
      height: 200,
      maxWidth: 600,
      alignSelf: 'center',
      backgroundColor: themeColors.background,
      paddingVertical: 5,
    }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 5,
        }}
        scrollEventThrottle={16}
      >
        {stories.map((story) => {
          if (story.isLabel) {
            return (
              <View key={story.id} style={{
                width: 120,
                borderRadius: 12,
                overflow: 'hidden',
                backgroundColor: '#000',
              }}>
                <View style={{
                  width: 120,
                  borderRadius: 12,
                  overflow: 'hidden',
                  borderColor: '#FFD700',
                  backgroundColor: '#000',
                  flex: 1,
                }}>
                  <LinearGradient
                    colors={['#FFD700', '#FFA500', '#FF8C00']}
                    style={{
                      height: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Feather name="award" size={28} color="#fff" />
                    <Text style={{
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginTop: 6,
                      textAlign: 'center',
                    }}>Últimos ganadores</Text>
                  </LinearGradient>
                  <View style={{
                    backgroundColor: '#000',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 25,
                  }}>
                    <Text style={{
                      color: '#FFD700',
                      fontWeight: '600',
                      fontSize: 16,
                      textAlign: 'center',
                    }}>¡Participa y gana!</Text>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <TouchableOpacity
                key={story.id}
                style={{
                  width: 120,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  ...(story.seen ? { opacity: 0.9 } : {}),
                }}
              >
                <Image
                  source={{ uri: story.image }}
                  style={{
                    height: 160,
                    width: '100%',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    opacity: 0.8,
                  }}
                  resizeMode="cover"
                />
                <View style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                }}>
                  <View style={{
                    borderWidth: 2,
                    borderRadius: 24,
                    padding: 2,
                    backgroundColor: '#000',
                    borderColor: story.seen ? '#a3a3a3' : '#2563eb',
                  }}>
                    <Image source={{ uri: story.avatar }} style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                    }} />
                  </View>
                </View>
                <View style={{
                  padding: 8,
                  alignItems: 'center',
                }}>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: '500',
                    textAlign: 'center',
                    color: '#fff',
                  }}>{story.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default StoriesViewer;
