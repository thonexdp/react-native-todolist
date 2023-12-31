import React from "react";
import  {  StyleSheet, Text,TouchableOpacity,View} from 'react-native';

export default function TodoItem({item, deleteItem}){

    return (
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding : 16,   
        marginTop :16,
        borderColor : '#bbb',
        borderWidth : 1,
        borderStyle : 'dashed',
        borderRadius : 5
    }
})