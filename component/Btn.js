import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Btn({ bgcolor, btnLabel, textColor,Press }) { // Destructuring props correctly
    return (
        <TouchableOpacity 
        onPress={Press}
        style={{
            backgroundColor: bgcolor, 
            borderRadius: 100,
            alignItems: 'center', 
            width: 250,
            paddingVertical:5,
            marginVertical:15

        }}>
            <Text style={{ color: textColor, fontSize: 25, fontWeight: "bold" }}>{btnLabel}</Text>
        </TouchableOpacity>
    );
}
