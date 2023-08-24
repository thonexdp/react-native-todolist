import React from "react";
import  {  StyleSheet, Text,View} from 'react-native';
import { globalstyles } from "../styles/global";


export default function Home(){

    return (
        <View style={globalstyles.container}>
            <Text style={globalstyles.titleText}>HOME</Text>
        </View>
    )
}
