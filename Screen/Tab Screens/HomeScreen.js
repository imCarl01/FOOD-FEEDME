import { StyleSheet, Text, View, SafeAreaView,FlatList, ActivityIndicator,Image, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopMealsScreen from './TopMealsScreen';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../Cart/CartProvider';




export default function HomeScreen() {
  const [meal, setMeal] =useState([]);
  const [isLoading, SetIsLoading] =useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [randomMeals, setRandomMeals] =useState([]);
  const {addToCart} =useCart();
  const navigation = useNavigation();
  const FetchFuredMeal = async ()=>{
    try{
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setMeal(data.categories);
      SetIsLoading(false);

    }catch(error){
      console.error(error);
      SetIsLoading(false);
    }
  }
  const renderMealItem =({item}) =>{
    return (
      <View key={item.idCategory} style={styles.card}>
        <TouchableOpacity onPress={()=> navigation.navigate(item.strCategory)}>
          <Image source={{uri :item.strCategoryThumb }} style={styles.mealImage}/>
          <Text style={{textAlign:"center"}}>{item.strCategory}</Text>
          <Text>{}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  useEffect(()=>{
    FetchFuredMeal();
  },[]);

  const handlERefresh=()=>{
    setRefreshing(true);
    FetchFuredMeal();
    setRefreshing(false);
  }

  if(isLoading){
    return(
      <SafeAreaView style={styles.isLoading}>
        <ActivityIndicator size='large' color='black'/>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{flexDirection:"row", 
          justifyContent:"space-between",
          backgroundColor: '#fff',
          padding: 10, borderColor: '#ddd' 
          }}>
          <Text style={{color: "orange", 
            fontSize:20,
            fontWeight:'bold',
            }}> <Text style={{fontSize:30}} >W</Text>elcome🏵</Text>

            <TouchableOpacity>
            <MaterialIcons name="star" size={25} color='red' />
            </TouchableOpacity>
        </View>

          <View>
            <Text style={{fontSize:19, marginHorizontal: 10, fontWeight:"bold"}}>All Products</Text>
          </View>
        
            <FlatList 
              data={meal}
              renderItem={renderMealItem}
              keyExtractor={(item)=>item.idCategory}
              horizontal
              // contentContainerStyle={styles.listContent}
          />

        
      </View>
      <TopMealsScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  isLoading:{
    flex: 1,
    justifyContent:"center",

    alignItems: "center"
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'#fff'
  },
  card: {
    // borderWidth:1,
    width: 100,
    height: 100,
    padding: 10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 50,
    borderColor: '#ddd',
    marginLeft: 10,
  },
  mealImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  // listContent:{
  //   paddingBottom: 20,
  // }
})