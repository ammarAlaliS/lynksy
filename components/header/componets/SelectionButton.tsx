import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const SelectionButton = ({themeColors}: any) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{

                alignItems: 'center',
            }}
        >
            {["Perfumes", "Electrónica", "Moda", "Hogar", 'ropa'].map((categoria, index, arr) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        backgroundColor: themeColors.gray,
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        borderRadius: 999,
                        marginRight: index !== arr.length - 1 ? 8 : 0,
                    }}
                >
                    <Text style={{ color: 'white' }}>{categoria}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default SelectionButton