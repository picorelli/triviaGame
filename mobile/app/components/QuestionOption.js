import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import { colors } from '../styles'
import styles from './QuestionOption.style'

class QuestionOption extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pressed: false,
    }
  }

  handlePress = () => {
    const {
      correct,
      disabled,
      onPress,
    } = this.props

    if (!disabled) {
      this.setState({
        pressed: true,
      })

      onPress({
        correctAwnser: correct,
      })
    }
  }

  render() {
    const {
      answer,
      disabled,
      correct,
    } = this.props

    const {
      pressed,
    } = this.state

    return (
      <TouchableOpacity
        style={[
          styles.optionTouchContainer,
          { backgroundColor: pressed && correct ? colors.quarternary : colors.secondary },
        ]}
        onPress={this.handlePress}
        activeOpacity={disabled ? 1 : 0.2}
      >
        <Text
          style={[
            styles.textContainer,
            { color: pressed && correct ? colors.secondary : colors.primary },
          ]}
        >
          {answer}
        </Text>
      </TouchableOpacity>
    )
  }
}

QuestionOption.defaultProps = {
  correct: false,
  disabled: false,
}

QuestionOption.propTypes = {
  answer: PropTypes.string.isRequired,
  correct: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}

export default QuestionOption
