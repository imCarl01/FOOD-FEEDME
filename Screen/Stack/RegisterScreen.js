import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  ImageBackground, 
  Dimensions, 
  Image, 
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] =useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation();

  const handleSignUp=()=>{
    if(email && password && username){
      navigation.navigate("HomeTabs")
    }
    else{
      Alert.alert("Fill in the required destails")
    }
    
  }
  const handleLogin=()=>{

    navigation.navigate("Login")
  }

  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={{fontSize:40,fontWeight:"bold" }}>Feed Me</Text>
        </View>
        <View style={styles.header}>
          <Image 
            source={require('./image/images__1_-removebg-preview.png')}
            style={styles.image}
          />
          <Text style={styles.headerText}>Register</Text>
        </View>

        <View style={styles.secondContainer}>
          <Text style={styles.text}>Username</Text>
          <TextInput 
            placeholder='Username' 
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            
          />
        </View>

        <View style={styles.secondContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput 
            placeholder='name@gmail.com' 
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.secondContainer}>
          <Text style={styles.text}>Password</Text>
          <View style={styles.passwordContainer}>
              <TextInput 
                placeholder='' 
                style={{height: 40, width: 290}}
                value={password}
                onChangeText={setPassword}
                secureTextEntry = {!showPassword}
                
              />
              <TouchableOpacity 
              onPress={()=>setShowPassword(!showPassword)}
              style={styles.icon}
              >
                <Ionicons name={showPassword? "eye-off": "eye"} size={20} color='gray'/>
              </TouchableOpacity>
          </View>

        </View>

        <View>
          <TouchableOpacity 
          style={{width: 300,height: 40, 
          textAlign: "center", 
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"lightgreen",
          borderRadius:10, marginBottom: 10,}} 
          onPress={handleSignUp}> 
            <Text style={{fontWeight:"bold",color:"black"}} >Sign Up</Text>

          </TouchableOpacity>

            {/* <Text style={{textAlign:"center",fontSize:20,marginBottom:1,}}>Or</Text> */}

          <TouchableOpacity 
          style={{}} onPress={handleLogin}> 
            <Text style={{fontWeight:"bold",color:"orange", fontSize: 20,}} >Login?</Text>

          </TouchableOpacity>



        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%', // Adjust the width based on your design needs
  },
  image: {
    width: 100,
    height: 100,
  },
  headerText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 12,
  },
  textInput: {
    width: 300,
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 10,
    width: 300,
  },
  icon:{
    position:"absolute",
    left: 270,
  },
  touchInput: {
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
  },
});
