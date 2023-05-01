import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CheeseSandwichBuilder = () => {
  const [cheeseType, setCheeseType] = useState('');
  const [breadType, setBreadType] = useState('');
  const [toppings, setToppings] = useState('');

  const handleOrder = () => {// handle order logic here
  };

  return <View style={styles.container}>
      <Image source={require('../assets/sandwich.png')} style={styles.image} />
      <Text style={styles.title}>Build Your Cheese Sandwich</Text>
      <TextInput style={styles.input} placeholder="Cheese Type" value={cheeseType} onChangeText={setCheeseType} />
      <TextInput style={styles.input} placeholder="Bread Type" value={breadType} onChangeText={setBreadType} />
      <TextInput style={styles.input} placeholder="Toppings" value={toppings} onChangeText={setToppings} />
      <TouchableOpacity style={styles.button} onPress={handleOrder}>
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
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#ff6f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default CheeseSandwichBuilder;