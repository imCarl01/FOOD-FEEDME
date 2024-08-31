import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../Cart/CartProvider';

export default function MiscellaneousScreen() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {addToCart} = useCart();

  const fetchBeefMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous');
      const data = await response.json();

      const mealsWithPrices = data.meals.map(meal => ({
        ...meal,
        price: Math.floor(Math.random() * 10000) + 1000, // Assign random prices between $10 and $100
      }));
      setMeals(mealsWithPrices)
      // setMeals(data.meals);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBeefMeals();
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
            {/* */}

            <View>
                <Text style={styles.mealT}>{item.strMeal}</Text>
                <Text style={styles.mealP}>₦{item.price.toFixed(2)}</Text>
            </View>

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
  mealT: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealP: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
});
