import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function AppIcon({
    name,
    size = 40,
    backgroundColor = colors.black,
    iconColor = colors.white
}) {
    return (
        <View style={
            {
                width: size,
                height: size,
                borderRadius: size/2,
                backgroundColor: backgroundColor,
                justifyContent: "center",
                alignItems: "center"
            }
        } >
        <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}></MaterialCommunityIcons>
        </View>
    );
}

export default AppIcon;