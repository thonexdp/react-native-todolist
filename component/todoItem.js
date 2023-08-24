import React from "react";
import  { Image, StyleSheet, Text,TouchableOpacity,View} from 'react-native';
import { AntDesign }  from '@expo/vector-icons';
export default function TodoItem({item, deleteItem}){

    return (
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <View style={styles.item}>
                {/* https://icons.expo.fyi/Index link icons */}
                 <AntDesign name="delete" size={15} color="red" />
                 {/* <Ionicons  name="md-checkmark-circle" size={32} color="green" /> */}
                 <Text style={styles.text} >{item.text}</Text>
                 {/* <Image
                    source={require('../assets/splash.png')}
                    fadeDuration={0}
                    style={{ width: 100, height: 100 }}
                /> */}
            </View>
            
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
        borderRadius : 5,
        flexDirection : 'row'
    },
    text : {
        marginLeft : 10
    }
})