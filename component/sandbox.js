import React from "react";
import  {  StyleSheet, Text,View} from 'react-native';

export default function SandBox(){
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}> One</Text>
            <Text style={styles.boxTwo}> Two </Text>
            <Text style={styles.boxThree}> Three </Text>
            <Text style={styles.boxFour}> Four</Text>
        </View>
    )
}
const styles =  StyleSheet.create({
    container : {
        // flex : 1,
        flexDirection : 'row', //row
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingTop : 40,
        backgroundColor : '#ddd'
    },
    boxOne : {
        flex : 1,
        backgroundColor : 'red',
        padding : 10
    },
    boxTwo : {
        flex : 1,
        backgroundColor : 'blue',
        padding : 20
    },
    boxThree : {
        flex : 2,
        backgroundColor : 'green',
        padding : 30
    },
    boxFour : {
        flex : 3,
        backgroundColor : 'violet',
        padding : 40
    },
})