import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
const sandwichIngredients = [{
  name: "Bread",
  image: require("../assets/bread.png")
}, {
  name: "Lettuce",
  image: require("../assets/lettuce.png")
}, {
  name: "Tomato",
  image: require("../assets/tomato.png")
}, {
  name: "Cheese",
  image: require("../assets/cheese.png")
}, {
  name: "Ham",
  image: require("../assets/ham.png")
}, {
  name: "Mayonnaise",
  image: require("../assets/mayonnaise.png")
}, {
  name: "Mustard",
  image: require("../assets/mustard.png")
}];

const SandwichBuilderScreen = () => {
  const [ingredients, setIngredients] = useState(sandwichIngredients);

  const handleDrag = (index, direction) => {
    const newIngredients = [...ingredients];
    const movedIngredient = newIngredients.splice(index, 1)[0];
    newIngredients.splice(index + direction, 0, movedIngredient);
    setIngredients(newIngredients);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Build Your Perfect Sandwich</Text>
      <ScrollView contentContainerStyle={styles.ingredientsContainer}>
        {ingredients.map((ingredient, index) => <TouchableOpacity key={ingredient.name} style={styles.ingredient} onLongPress={() => handleDrag(index, -1)} onPressOut={() => handleDrag(index, 1)}>
            <Image source={ingredient.image} style={styles.ingredientImage} />
            <Text style={styles.ingredientName}>{ingredient.name}</Text>
          </TouchableOpacity>)}
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  ingredientsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  ingredient: {
    alignItems: "center",
    margin: 10
  },
  ingredientImage: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});
export default SandwichBuilderScreen;