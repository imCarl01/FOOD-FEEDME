import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/Tab Screens/HomeScreen';
import Onbordeing from './Screen/Onboarding Screens/Onbordeing';
import RegisterScreen from './Screen/Stack/RegisterScreen';
import LoginScreen from './Screen/Stack/LoginScreen';
import SerachScreen from './Screen/Tab Screens/SerachScreen';
import FavouriteScreen from './Screen/Tab Screens/CartScreen';
import ProfileScreen from './Screen/Tab Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BeefScreen from './Screen/Stack/BeefScreen';
import ChickenScreen from './Screen/Stack/ChickenScreen'
import DessertScreen from './Screen/Stack/DessertScreen';
import LambScreen from './Screen/Stack/LambScreen';
import PastaScreen from './Screen/Stack/PastaScreen';
import PorkScreen from './Screen/Stack/PorkScreen';
import SeafoodScreen from './Screen/Stack/SeafoodScreen';
import SideScreen from './Screen/Stack/SideScreen';
import CartScreen from './Screen/Tab Screens/CartScreen';
import EditScreen from './Screen/Stack/EditScreen';
import StatsScreen from './Screen/Stack/StatsScreen';
import SettingsScreen from './Screen/Stack/SettingsScreen';
import InviteFirends from './Screen/Stack/InviteFirends';
import HelpScreen from './Screen/Stack/HelpScreen';

import { CartProvider, useCart } from './Cart/CartProvider';

import StackHeaderWithBadge from './Screen/Stack/StackHeaderWithBadge';
import Payment from './Screen/Stack/Payment';
import MiscellaneousScreen from './Screen/Stack/MiscellaneousScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigtor(){
  const {cartCount} = useCart();
  return(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: "orange", 
    tabBarInactiveTintColor:"black",
    headerShown:false}}
    >
      <Tab.Screen name="Home" 
      component={HomeScreen} 
      options={ {tabBarIcon:({color})=><Ionicons name='home' size={25} color={color}/>}}
      
      />
      <Tab.Screen name="Search" 
      component={SerachScreen}
      options={ {tabBarIcon:({color})=><Ionicons name='search' size={25} color={color}/>}}
      />
      <Tab.Screen name="Cart" 
      component={CartScreen}
      options={ {tabBarIcon:({color})=>(<MaterialIcons name="shopping-cart" size={25} color={color} />), 
      tabBarBadge: cartCount > 0 ? cartCount: null, }}
      />
      <Tab.Screen name="Profile" 
      component={ProfileScreen}
      options={ {tabBarIcon:({color})=><Ionicons name='person' size={25} color={color}/>}}
      />
    </Tab.Navigator>
  )
}
export default function App(){
  return(
    <CartProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Onbording'>
      <Stack.Screen name='Onbording' component={Onbordeing} options={{headerShown: false}}/>
      <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name='HomeTabs' component={TabNavigtor} options={{headerShown: false}}/>

      <Stack.Screen name='Beef' component={BeefScreen} options={{headerShown: true, 
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>}}/>

      <Stack.Screen name='Chicken' component={ChickenScreen} options={{headerShown: true,
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
       }}/>
      <Stack.Screen name='Dessert' component={DessertScreen} options={{headerShown: true, 
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
      }}/>
      <Stack.Screen name='Lamb' component={LambScreen} options={{headerShown: true, 
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
      }}/>
      <Stack.Screen name='Pasta' component={PastaScreen} options={{headerShown: true,
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
      }}/>
      <Stack.Screen name='Pork' component={PorkScreen} options={{headerShown: true,
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
      }}/>
      <Stack.Screen name='Seafood' component={SeafoodScreen} options={{headerShown: true,
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
      }}/>
      <Stack.Screen name='Side' component={SideScreen} options={{headerShown: true,
        headerRight:()=><StackHeaderWithBadge/>, tabBarIcon: ()=><MaterialIcons name='add-shopping-cart' size={30} color='orange'/>
      }}/>
      <Stack.Screen name='Miscellaneous' component={MiscellaneousScreen} options={{headerShown: true,}}/>
      <Stack.Screen name='Edit' component={EditScreen} options={{headerShown: true,}}/>
      <Stack.Screen name='Stat' component={StatsScreen} options={{headerShown: true}}/>
      <Stack.Screen name='Setting' component={SettingsScreen} options={{headerShown: true}}/>
      <Stack.Screen name='Invite' component={InviteFirends} options={{headerShown: true}}/>
      <Stack.Screen name='Help' component={HelpScreen} options={{headerShown: true}}/>
      
      <Stack.Screen name='Payment' component={Payment} options={{headerShown: true}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
