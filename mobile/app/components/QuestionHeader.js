import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import styles from './QuestionHeader.style'

const QuestionHeader = ({
  questionPosition,
  questionsLength,
}) => (
  <View>
    <Text style={styles.textContainer}>
      {`Question ${questionPosition} of ${questionsLength}`}
    </Text>
  </View>
)

QuestionHeader.propTypes = {
  questionPosition: PropTypes.number.isRequired,
  questionsLength: PropTypes.number.isRequired,
}

export default QuestionHeader
