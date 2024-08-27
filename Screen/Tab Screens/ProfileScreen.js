import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation =useNavigation();
  return (
    <ScrollView style={styles.generalContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('./image/ProdileImage1-removebg-preview.png')} style={styles.usersProfile}/>
        </View>

        <View style={styles.profileContainer}>
          <Text style={{fontWeight: "bold", fontSize: 25,}}>Carl Uchenna</Text>
        </View>

        <View style={styles.usersProperties}>
          <View style={styles.indivualPropeites}>
              <View style={{width:50,height:50,borderRadius: 10,
                alignItems:"center", 
                justifyContent:"center", backgroundColor:"#fcc010"}}>
                <MaterialIcons name='edit' size={35} color="black"/>
              </View>
              
              <TouchableOpacity onPress={()=>navigation.navigate("Edit")}>
                <Text style={{fontSize:25, fontWeight: "bold"}}
                >Edit Pofile </Text>  
              </TouchableOpacity>  
          </View>

          <View style={styles.indivualPropeites}>
              <View style={{width:50,height:50, borderRadius: 10,
                alignItems:"center", 
                justifyContent:"center",backgroundColor:"#fcc010"}}>
                <MaterialIcons name='bar-chart' size={35} color="black"/>
              </View>
              
              <TouchableOpacity onPress={()=>navigation.navigate("Stat")}>
                <Text style={{fontSize:25, fontWeight: "bold"}}>Stats</Text>  
              </TouchableOpacity> 
          </View>

          <View style={styles.indivualPropeites}>
              <View style={{width:50,height:50, borderRadius: 10,
                alignItems:"center", 
                justifyContent:"center",backgroundColor:"#fcc010"}}>
                <MaterialIcons name='settings' size={35} color="black"/>
              </View>
              
              <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
                <Text style={{fontSize:25, fontWeight: "bold"}}>Settings</Text>  
              </TouchableOpacity> 
          </View>

          <View style={styles.indivualPropeites}>
              <View style={{width:50,height:50, borderRadius: 10,
                alignItems:"center", 
                justifyContent:"center", backgroundColor:"#fcc010"}}>
                <MaterialIcons name='person' size={35} color="black"/>
              </View>
              
              <TouchableOpacity onPress={()=>navigation.navigate("Invite")}>
                <Text style={{fontSize:25, fontWeight: "bold"}}>Invite Firends</Text>  
              </TouchableOpacity> 
          </View>

          <View style={styles.indivualPropeites}>
              <View style={{width:50,height:50, borderRadius: 10,
                alignItems:"center", 
                justifyContent:"center", backgroundColor:"#fcc010"}}>
                <MaterialIcons name='help' size={35} color="black"/>
              </View>
              
              <TouchableOpacity onPress={()=>navigation.navigate("Help")}>
                <Text style={{fontSize:25, fontWeight: "bold"}}>Help</Text>  
              </TouchableOpacity>  
          </View>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  generalContainer:{
    flex:1,
    backgroundColor:"#fff",
  },
  container:{
    alignItems: "center",
    borderWidth:1,
  },
  usersProfile:{
    width: 200, 
    height: 200,
    // alignItems: "center",
    
  },
  profileContainer:{
   alignItems:"center",
  },
  usersProperties:{
    flex:1,
    margin:10,
  },
  indivualPropeites:{
    flexDirection: "row",
    justifyContent:"space-between",
    padding: 20,
  }
})