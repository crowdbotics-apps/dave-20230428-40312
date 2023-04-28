import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PizzaOrderScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pizza Order</Text>
        <Image source={require('../assets/pizza.png')} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Choose your ingredients:</Text>
        <View style={styles.ingredientsContainer}>
          <TouchableOpacity style={styles.ingredient}>
            <Image source={require('../assets/tomato.png')} style={styles.ingredientIcon} />
            <Text style={styles.ingredientText}>Tomato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ingredient}>
            <Image source={require('../assets/mushroom.png')} style={styles.ingredientIcon} />
            <Text style={styles.ingredientText}>Mushroom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ingredient}>
            <Image source={require('../assets/onion.png')} style={styles.ingredientIcon} />
            <Text style={styles.ingredientText}>Onion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ingredient}>
            <Image source={require('../assets/pepperoni.png')} style={styles.ingredientIcon} />
            <Text style={styles.ingredientText}>Pepperoni</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ingredient}>
            <Image source={require('../assets/olive.png')} style={styles.ingredientIcon} />
            <Text style={styles.ingredientText}>Olive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ingredient}>
            <Image source={require('../assets/cheese.png')} style={styles.ingredientIcon} />
            <Text style={styles.ingredientText}>Cheese</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  logo: {
    width: 50,
    height: 50
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  ingredient: {
    width: '48%',
    height: 120,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ingredientIcon: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  ingredientText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  orderButton: {
    backgroundColor: '#ff5c5c',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default PizzaOrderScreen;