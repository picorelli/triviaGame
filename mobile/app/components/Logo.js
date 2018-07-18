import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'

import styles from './Logo.styles'
import logo from '../assets/images/logo.png'

class Logo extends Component {
  constructor(props) {
    super(props)

    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    const {
      isAnimated,
    } = this.props

    if (isAnimated) {
      this.startAnimation()
    }
  }

  startAnimation() {
    this.spinValue.setValue(0)

    Animated.loop(Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
    })).start()
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })

    return (
      <Animated.Image
        resizeMode="contain"
        source={logo}
        style={[
          styles.imageContainer, {
            transform: [
              { rotate: spin },
            ],
          }]}
      />
    )
  }
}

Logo.defaultProps = {
  isAnimated: false,
}

Logo.propTypes = {
  isAnimated: PropTypes.bool,
}

export default Logo
