import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: 'orange',
          image: (
            <View style={styles.imageContainer}>
              <Image
                source={require('./image/Food1.jpg')}
                style={styles.lottie}
                resizeMode='contain'
              />
            </View>
          ),
          title: 'Welcome to Our App',
          subtitle: 'Experience the best culinary delights.',
        },

        {
            backgroundColor: 'orange',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require('./image/Food1.jpg')}
                  style={styles.lottie}
                  resizeMode='contain'
                />
              </View>
            ),
            title: 'Welcome to Our App',
            subtitle: 'Experience the best culinary delights.',
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
