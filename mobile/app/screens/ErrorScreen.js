import React from 'react'
import { Image, Text, View } from 'react-native'
import Expo from 'expo'

import ScreenProvider from '../containers/ScreenProvider'
import PrimaryButton from '../components/PrimaryButton'

import styles from './ErrorScreen.style'
import warning from '../assets/images/warning.png'

const ErrorScreen = () => (
  <ScreenProvider>
    <View style={styles.viewContainer}>
      <Image
        style={styles.warningContainer}
        source={warning}
        resizeMode="contain"
      />
      <Text style={styles.textContainer}>
        Ooh, something went wrong!
      </Text>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          label="Restart"
          onPress={() => Expo.Util.reload()}
        />
      </View>
    </View>
  </ScreenProvider>
)

export default ErrorScreen
