import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../Cart/CartProvider'; // Assuming you have a useCart hook to get the cart count
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function StackHeaderWithBadge() {
  const { cart } = useCart();
  const cartItemCount = cart.length; // Replace this with the logic to get the cart item count
  const navigation = useNavigation();

  return (
    <View style={{ paddingRight: 10 }}>
      <TouchableOpacity onPress={()=>navigation.navigate("Cart")} >
          <MaterialIcons name="shopping-cart" size={25} color="black" />  
      </TouchableOpacity>
      
      {cartItemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartItemCount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default StackHeaderWithBadge;
