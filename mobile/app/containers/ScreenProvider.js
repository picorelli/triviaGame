import React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar } from 'react-native'

import LoadingScreen from '../screens/LoadingScreen'
import styles from './ScreenProvider.style'

const ScreenProvider = ({ children, loaded }) => (
  <View style={styles.imgBackgroundContainer}>
    <StatusBar hidden />
    {loaded ? children : <LoadingScreen />}
  </View>
)

ScreenProvider.defaultProps = {
  loaded: true,
}

ScreenProvider.propTypes = {
  children: PropTypes.any.isRequired,
  loaded: PropTypes.bool,
}

export default ScreenProvider
