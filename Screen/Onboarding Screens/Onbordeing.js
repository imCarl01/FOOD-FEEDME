import { StyleSheet, Text, View, Image, Dimensions, Touchable } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handeleGetStarted = ()=>{
        navigation.navigate('Register')
    }
    const getStartedButton =({...props})=>{
        return(
            <TouchableOpacity style={{borderWidth:1, padding: 10, backgroundColor: "white",
              marginHorizontal: 10, borderRadius: 10,}} {...props}>
                <Text
                style={{fontSize:15, fontFamily: 'monospace', fontWeight:"bold"}}    
                >Get Started</Text>
            </TouchableOpacity>
        )

    }
  return (
    <Onboarding
    onDone={handeleGetStarted}
    onSkip={handeleGetStarted}
    DoneButtonComponent={getStartedButton}
      pages={[
        {
          backgroundColor: '#8e37c8',
          image: (
            <View style={styles.imageContainer}>
              <Image
                source={require('./image/images__12_-removebg-preview.png')}
                style={styles.lottie}
                resizeMode='contain
                '
              />
            </View>
          ),
          title: <Text 
          style={{fontSize: 30, fontWeight: 'bold', color: 'white', fontFamily: 'monospace'}}
          >Choose Your Favourite Food🥘🍴
          </Text>,
          subtitle: '',
        },

        {
            backgroundColor: '#c88437',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require('./image/delivery-food.gif')}
                  style={styles.lottie}
                  resizeMode='contain'
                />
              </View>
            ),
            title: <Text 
            style={{fontSize: 30, fontWeight: 'bold', color: 'white', marginHorizontal: 10, fontFamily: 'monospace'}}
            >Get your food at doorstep 🚚
            </Text>,
            subtitle: '',
            
          },
          {
            backgroundColor: '#995fa0',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require('./image/6364b6fd26e2986d10b93c20_Thumbnail-0013.png')}
                  style={styles.lottie}
                  resizeMode='contain'
                />
              </View>
            ),
            title: <Text 
            style={{fontSize: 30, fontWeight: 'bold', color: 'white', marginHorizontal: 10, fontFamily: 'monospace'}}
            >Meal with one another 🍽
            </Text>,
            subtitle: '',
          },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    height: height * 0.6, // Set to 60% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
