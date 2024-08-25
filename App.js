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
import FavouriteScreen from './Screen/Tab Screens/FavouriteScreen';
import ProfileScreen from './Screen/Tab Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigtor(){
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
      <Tab.Screen name="Favourite" 
      component={FavouriteScreen}
      options={ {tabBarIcon:({color})=><MaterialIcons name="favorite-outline" size={25} color={color} /> }}
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
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Onbording'>
      <Stack.Screen name='Onbording' component={Onbordeing} options={{headerShown: false}}/>
      <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name='HomeTabs' component={TabNavigtor} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
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
