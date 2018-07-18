import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './QuestionCard.style'

const CardQuestion = ({ question }) => (
  <View style={styles.viewContainer}>
    <Text style={styles.textContainer}>
      {question}
    </Text>
  </View>
)

CardQuestion.propTypes = {
  question: PropTypes.string.isRequired,
}

export default CardQuestion
