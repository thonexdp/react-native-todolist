import React, { useState } from "react";
import  { Alert, FlatList, StyleSheet, Text,View ,TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './component/header'
import TodoItem from "./component/todoItem";
import AddTodo from "./component/addTodo";
import SandBox from "./component/sandbox";

export default function App(){
    const [todos,setTodos] = useState([
        { text : 'buy cellphone' , id : 1 },
        { text : 'buy short' , id : 2 },
        { text : 'buy pants' , id : 3 },
        { text : 'buy Lsptop' , id : 4 },
        { text : 'buy Lsptop' , id : 5 },
    ])
    const deleteItem = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter(todo => todo.id != id)
        })
    }
    const handleAddTodo = (text) => {
        if(text.length > 3){
            setTodos((prevTodo) => {
                return [
                    {text , id : Math.random().toString()},
                    ...prevTodo
                ]
            })
        }else {
            Alert.alert('OOPS!','Must be more than 3 char long!',[
                {text:'UnderStood', onPress : () => console.log('alert closed')}
            ])
        }
        
    }
    return (
    //    <SandBox />
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>  
            <View style={styles.container}>
                {/* header */}
                <Header/>
                <View style={styles.content}>
                    {/* to form */}
                    <AddTodo handleAddTodo={handleAddTodo}/>

                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                            <TodoItem item={item} deleteItem={deleteItem}/>
                            )} 
                        />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#f2f2f2'
    },
    content:{
        flex : 1,
        padding : 40
    },
    list : {
        flex : 1,
        marginTop : 20
    }
})