import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

import defaultStyles from "../config/styles" ;
import AppText from './AppText';
import AppScreen from './AppScreen';
import PickerItem from './PickerItem';
function AppPicker({icon, items, onSelectItem, selectedItem, placeholder}) {
   const [modalVisible, setModalVisible ] = useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={ ()=> setModalVisible(true)}>
        <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.black} style={styles.icon} />}
           <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
           <MaterialCommunityIcons name="chevron-down" size={20} color={colors.black} />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
        <Button title="Close" onPress={()=>setModalVisible(false)}></Button>
        <FlatList 
        data={items}
        keyExtractor={item=>item.value.toString()}
        renderItem={({ item }) => <PickerItem label={item.label} onPress={()=> {
            setModalVisible(false);
            onSelectItem(item);
        }}></PickerItem>}
        ></FlatList>
        </AppScreen>
        </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1,
    }
})
export default AppPicker;