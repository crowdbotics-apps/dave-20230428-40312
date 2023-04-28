import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const pizzaRestaurants = [{
  id: '1',
  name: 'Pizza Hut',
  image: require('../assets/pizza-hut.jpg')
}, {
  id: '2',
  name: 'Domino\'s Pizza',
  image: require('../assets/dominos.jpg')
}, {
  id: '3',
  name: 'Papa John\'s Pizza',
  image: require('../assets/papa-johns.jpg')
}, {
  id: '4',
  name: 'Little Caesars',
  image: require('../assets/little-caesars.jpg')
}];

const PizzaGalleryScreen = () => {
  const renderPizzaRestaurant = ({
    item
  }) => <View style={styles.pizzaRestaurantContainer}>
      <Image source={item.image} style={styles.pizzaRestaurantImage} />
      <Text style={styles.pizzaRestaurantName}>{item.name}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={pizzaRestaurants} renderItem={renderPizzaRestaurant} keyExtractor={item => item.id} numColumns={2} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  pizzaRestaurantContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  pizzaRestaurantImage: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  pizzaRestaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  }
});
export default PizzaGalleryScreen;