import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("anton");
  const [people, setPeople] = useState([
    { name: "name1", id: 1 },
    { name: "name2", id: 2 },
    { name: "name3", id: 3 },
    { name: "name4", id: 4 },
    { name: "name5", id: 5 },
    { name: "name6", id: 6 },
    { name: "name7", id: 7 },
    { name: "name8", id: 8 },
    { name: "name9", id: 9 },
    { name: "name10", id: 10 },
    { name: "name10", id: 11 },
  ]);

  const pressHandler = (id) => {
    console.log("anton");
    setPeople((prevpeople) => {
        return prevpeople.filter(person => person.id !== id)
    })
  };

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2} 
        // keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity  onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} 
      />

      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}

        <Text>Hello your name is {name}</Text>
        <Text>Enter Name :</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="e.g Anto De Paz"
          onChangeText={(value) => setName(value)}
        />

        <Text>Enter Comment :</Text>
        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputStyle}
          placeholder="e.g Content"
          onChangeText={(value) => setDescription(value)}
        />
        <View style={styles.buttonStyle}>
          <Button title="Click ME" onPress={clickBtn} />
        </View>

        <StatusBar style="auto" />
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textColor: {
    color: "red",
    backgroundColor: "green",
    padding: 10,
    fontWeight: "bold",
  },
  buttonStyle: {
    marginTop: 30,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "lightgreen",
    fontSize: 12,
    marginHorizontal : 10,
    marginTop : 20
  },
});
