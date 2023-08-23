import React, { useState } from 'react'
import  {  Button, StyleSheet, Text,TextInput,View} from 'react-native';

export default function AddTodo({handleAddTodo}){
    const [text,setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

  return (
    <View>
        <TextInput 
        style={styles.input}
        placeholder='Enter Todo'
        onChangeText={changeHandler}
        />
        <Button  onPress={ () => handleAddTodo(text)}  title='add todo' color='lightblue' />
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical :6 ,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    }
})
