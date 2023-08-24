import React from "react";
import  {  StyleSheet, Text,View} from 'react-native';
import { globalstyles } from "../styles/global";

export default function Details(){
    return (
        <View style={globalstyles.container}>
        <Text style={globalstyles.titleText}>About</Text>
    </View>
    )
}