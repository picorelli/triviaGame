import React from 'react'
import { Text, View } from 'react-native'

import Logo from '../components/Logo'
import styles from './LoadingScreen.style'

const LoadingScreen = () => (
  <View style={styles.viewContainer}>
    <Logo isAnimated />
    <Text style={styles.textContainer}>
        Loading..
    </Text>
  </View>
)

export default LoadingScreen
