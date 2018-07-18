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
      onPress,
      correct,
    } = this.props

    this.setState({
      pressed: true,
    })

    onPress({
      correctAwnser: correct,
    })
  }

  render() {
    const {
      answer,
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
}

QuestionOption.propTypes = {
  answer: PropTypes.string.isRequired,
  correct: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}

export default QuestionOption
