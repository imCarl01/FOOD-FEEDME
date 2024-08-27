// CartScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import { useCart } from '../../Cart/CartProvider';


export default function CartScreen() {
  const { cart } = useCart();
  const [orderValue, setOrderValue] = useState(0)

  const handleIncrease = ()=>{
    setOrderValue(orderValue + 1)
  }

  const handleDecrese =()=>{
    setOrderValue(orderValue - 1)
  }



  const renderCartItem = ({ item }) => (
    <View key={item.idCategory} style={styles.cartItem}>
      <View style={{flex:1, flexDirection: "row",
         justifyContent:"space-between", 
         alignItems:"center",marginLeft: 
         10,marginRight:10, }}>
          <Image source={{uri :item.strMealThumb }} style={{height: 70, width: 70,borderRadius: 10,}}/>
          <Text>{item.strMeal}</Text>

          <TouchableOpacity style={{ alignItems:"center", justifyContent:"center"}}>
            <Text></Text>
            <Button title='Add' onPress={handleIncrease}/>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
            <Button title='Remove' onPress={handleDecrese}/>
          </TouchableOpacity>
      </View>

      <View>
        <Text>{orderValue}</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart Items:</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.idMeal.toString()}
    
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    padding:5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
