import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
function AppListItemSwipeActions({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons
            name="trash-can"
            size={35}
            color={colors.white}
            ></MaterialCommunityIcons>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default AppListItemSwipeActions;