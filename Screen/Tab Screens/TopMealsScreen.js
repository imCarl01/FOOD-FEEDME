import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native';

export default function HomeScreen() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
      const data = await response.json();
      setMeals(data.meals);
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
      <Text style={styles.mealTitle}>{item.strMeal}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        {/* <Text style={{fontSize:40,}}>🤤</Text> */}
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        // horizontal={efals}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
   
    
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  mealContainer: {
    flex:1,
    marginRight: 15,
    alignItems: 'center',
  },
  mealImage: {
    width: '100%',
    height: 120,
    flexDirection:"column",
    borderRadius: 10,
    
  },
  mealTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
