import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, FlatList, Image, ActivityIndicator,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../Cart/CartProvider';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const {cart} = useCart();
  const {addToCart} =useCart()

  const searchFood = async () => {
    if (searchQuery.trim() === '') return;
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if(isLoading){
    <SafeAreaView>
      <ActivityIndicator size='large' color='black' />
      <Text>Meal Loading....</Text>
    </SafeAreaView>
  }

  const renderItemMeal = ({ item }) => {
    return (
      <View key={item.idMeal} style={styles.mealItem}>
        <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
        <View style={{flex:1,flexDirection:"row", alignItems:"center",justifyContent:"space-between" , width: "70%"}}>
            <Text style={styles.mealName}>{item.strMeal}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
            <MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
            </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
        <SafeAreaView style={{}}>
            <View style={styles.searchArea}>
              <TextInput
                style={styles.textInputArea}
                placeholder='Search...'
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={searchFood}
              />

              <FlatList
                  data={meals}
                  renderItem={renderItemMeal}
                  keyExtractor={(item) => item.idMeal.toString()}
                  numColumns={2}
                  key={(numColumns)=>numColumns.toString()}
                  showsHorizontalScrollIndicator={false}

                />

            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchArea: {
    padding: 5,
    marginRight: 15,
    marginLeft: 15,
  },
  textInputArea: {
    borderWidth: 2,
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  mealItem: {
    flex:1,
    flexDirection:"column",
    marginBottom: 15,
    alignItems:"center",
    margin: 5,
  },
  mealImage: {
    width: '100%',
    height: 120,
    marginRight: 10,
    margin: 5,
    borderRadius: 10,
  },
  mealName: {
    fontSize: 18,
    marginTop:10,
    textAlign:"center",

  
  },
});
