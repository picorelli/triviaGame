import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import ScreenProvider from '../containers/ScreenProvider'
import PrimaryButton from '../components/PrimaryButton'

import medal from '../assets/images/medal.png'
import styles from './ScoreScreen.style'

class ScoreScreen extends Component {
    handlePress = () => {
      const {
        navigation,
      } = this.props

      navigation.navigate('StartupScreen')
    }

    render() {
      const {
        navigation,
      } = this.props

      const score = navigation.getParam('score', 0)

      return (
        <ScreenProvider>
          <View style={styles.viewContainer}>
            <Image
              style={styles.awardContainer}
              source={medal}
              resizeMode="contain"
            />
            <Text style={styles.textContainer}>
              {`Your score is ${score}`}
            </Text>
            <View style={styles.bottomContainer}>
              <PrimaryButton
                label="Leave"
                onPress={this.handlePress}
              />
            </View>
          </View>
        </ScreenProvider>
      )
    }
}

ScoreScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ScoreScreen
