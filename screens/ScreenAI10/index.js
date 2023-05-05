import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SubSandwichBuilder = () => {
  const [breadType, setBreadType] = useState('');
  const [meatType, setMeatType] = useState('');
  const [cheeseType, setCheeseType] = useState('');
  const [toppings, setToppings] = useState('');
  return <View style={styles.container}>
      <Image source={require('../assets/sub-sandwich.jpg')} style={styles.image} />
      <Text style={styles.title}>Build Your Own Sub Sandwich</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Bread Type" onChangeText={text => setBreadType(text)} value={breadType} />
        <TextInput style={styles.input} placeholder="Meat Type" onChangeText={text => setMeatType(text)} value={meatType} />
        <TextInput style={styles.input} placeholder="Cheese Type" onChangeText={text => setCheeseType(text)} value={cheeseType} />
        <TextInput style={styles.input} placeholder="Toppings" onChangeText={text => setToppings(text)} value={toppings} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default SubSandwichBuilder;