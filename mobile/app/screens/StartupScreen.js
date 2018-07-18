import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import ScreenProvider from '../containers/ScreenProvider'
import PrimaryButton from '../components/PrimaryButton'
import Logo from '../components/Logo'

import styles from './StartupScreen.style'

const StartupScreen = ({ navigation }) => (
  <ScreenProvider>
    <View style={styles.viewContainer}>
      <Logo />
      <PrimaryButton
        label="Get started"
        onPress={() => navigation.replace('QuestionScreen')}
      />
    </View>
  </ScreenProvider>
)

StartupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default StartupScreen
