import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useCart } from '../../Cart/CartProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const { cart, setCart} = useCart();
  const [quantities, setQuantities] = useState({});
  const {deleteFromCart} = useCart(); 
  const navigation = useNavigation();

  const handleIncrease = (idMeal) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [idMeal]: (prevQuantities[idMeal] || 1) + 1,
    }));
  };

  const handleDecrease = (idMeal) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [idMeal]: Math.max((prevQuantities[idMeal] || 1) - 1, 0),
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = quantities[item.idMeal] || 1; // Default to 1 if not modified
      return total + item.price * quantity;
    }, 0);
  };

  const renderCartItem = ({ item }) => (
    <View key={item.idMeal} style={styles.cartItem}>
      <Image source={{ uri: item.strMealThumb }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.strMeal}</Text>
        <Text style={styles.itemPrice}>₦{item.price.toFixed(2)}</Text>
        <Text style={styles.quantityText}>Quantity: {quantities[item.idMeal] || 1}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => handleIncrease(item.idMeal)}>
          <Text style={styles.controlButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrease(item.idMeal)}>
          <Text style={styles.controlButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteFromCart(item.idMeal)} >
          <MaterialIcons name="delete" size={20} color="black" />
        </TouchableOpacity>
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
      <View style={styles.totalContainer}>
        <TouchableOpacity >
          <Text style={styles.totalText}>Total:₦{calculateTotal().toFixed(2)}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Payment", 
                {totalAmount: calculateTotal(), cartItems: cart} )}>
                <Text style={styles.totalText}>Check out</Text>
              </TouchableOpacity>
            </View>
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
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  itemImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 2,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  controlButton: {
    fontSize: 20,
    fontWeight: 'bold',

    paddingHorizontal: 10,
  },
  totalContainer: {
    // marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'orange',
    height:50,
    justifyContent:"center",
    borderRadius: 10,
  },
  total:{
    borderWidth:1,
  },
  totalText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});



