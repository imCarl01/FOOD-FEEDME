import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, ActivityIndicator,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ChickenScreen() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchChickenMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
      const data = await response.json();
      setMeals(data.meals);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChickenMeals();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <View style={styles.mealContainer}>
            <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
            <Text style={styles.mealTitle}>{item.strMeal}</Text>

            <TouchableOpacity onPress={() => addToCart(item)} >
                  <MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        key={(numColumns) => numColumns.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealContainer: {
    flex:1,
    marginBottom: 15,
    alignItems: 'center',
    
  },
  mealImage: {
    width: '90%',
    height: 120,
    borderRadius: 10,
    margin:5,
  },
  mealTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
