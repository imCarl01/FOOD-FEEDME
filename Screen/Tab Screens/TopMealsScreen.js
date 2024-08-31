import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../Cart/CartProvider';

export default function TopMealsScreen() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  const fetchMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
      const data = await response.json();

      // Add prices to each meal item
      const mealsWithPrices = data.meals.map(meal => ({
        ...meal,
        price: Math.floor(Math.random() * 10000) + 1000, // Assign random prices between $10 and $100
      }));
      //setMeals(data.meals)
      setMeals(mealsWithPrices);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const renderMealItem = ({ item }) => (
    <View style={styles.mealContainer}>
      <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
      <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%"}}>
        <View>
          <Text style={styles.mealTitle}>{item.strMeal}</Text>
          <Text style={styles.mealPrice}>₦{item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => addToCart(item)}>
          <MaterialIcons name='add-shopping-cart' size={30} color='orange' />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealContainer: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
    padding: 5,
  },
  mealImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    margin: 5,
  },
  mealTitle: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
});
