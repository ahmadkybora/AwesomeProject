import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList, 
  TouchableOpacity, 
  Alert, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandBox';

export default function App() {
  // const [name, setName] = useState('shaun');
  // const [age, setAge] = useState(40);
  // const [people, setPeople] = useState([
  //   { name: 'sh1', id: '1' }, 
  //   { name: 'sh2', id: '2' }, 
  //   { name: 'sh3', id: '3' }, 
  //   { name: 'sh4', id: '4' }, 
  //   { name: 'sh5', id: '5' }, 
  //   { name: 'sh6', id: '6' }, 
  //   { name: 'sh7', id: '7' }, 
  //   { name: 'sh8', id: '8' }, 
  //   { name: 'sh9', id: '9' }, 
  //   { name: 'sh10', id: '10' }, 
  // ]);
  // const pressHandler = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id != id);
  //   })
  // }
  const [todos, setTodos] = useState([
    { text: 'buy coffe1', key: '1' }, 
    { text: 'buy coffe2', key: '2' }, 
    { text: 'buy coffe3', key: '3' }, 
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OPS!', 'whoops', [
        {text: 'un', 'onPress': () => console.log()}
      ]);
    }
  }
  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList 
                data={todos} 
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}/>
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
    // <View style={styles.container}>
    //   <FlatList 
    //     numColumns={2}
    //     data={people}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity onPress={() => pressHandler(item.id)}>
    //         <Text style={styles.item}>{item.name}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />
      /* <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */
      /* <Text>Enter Name: </Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder='your name'
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter Age: </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='your name'
        onChangeText={(val) => setAge(val)}
      /> */
    /* </View> */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20
  }
});
