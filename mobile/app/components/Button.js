import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import { fontSize as fSize } from '../styles'
import styles from './Button.style'

const Button = ({
  backgroundColor,
  color,
  fontSize,
  label,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.buttonTouch, { backgroundColor }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color }, { fontSize }]}>
      {label}
    </Text>
  </TouchableOpacity>
)

Button.defaultProps = {
  fontSize: fSize.sm,
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  onPress: PropTypes.func.isRequired,
}

export default Button
