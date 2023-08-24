import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import React, { useState } from "react";
// import  {  StyleSheet, Text,View} from 'react-native';
// import Home from "./screen/home";
// import { AppLoading } from 'expo';
 
// import * as Font from 'expo-font';

// // navigation
// import { NavigationContainer } from '@react-navigation/native';

// import Navigator from './routes/home'


// const getFonts = () => Font.loadAsync({
//         'oswald-bold' : require('./assets/fonts/Oswald-Bold.ttf'),
//         'oswald-regular' : require('./assets/fonts/Oswald-Regular.ttf')
//     });



// export default function App() {

//     const [fontload,setFontload] = useState(true);
//     if(fontload){
//         return (
//             <Navigator/>
//         );
//     }else{
//         return (
//             <AppLoading
//                 startAsync={getFonts}
//                 onFinish={() => setFontload(true)}
//             />
//         );
//     }
   
// }
// const styles =  StyleSheet.create({
//     header : {
//         height : 80,
//         paddingTop : 38,
//         backgroundColor : 'skyblue'
//     },
//     title : {
//         textAlign : 'center',
//         color : '#fff',
//         fontSize : 20,
//         fontWeight : 'bold'
//     }
// })