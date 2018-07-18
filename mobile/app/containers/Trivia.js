import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'
import QuestionHeader from '../components/QuestionHeader'
import QuestionCard from '../components/QuestionCard'
import QuestionOption from '../components/QuestionOption'

import { calculateScore, prepareQuestion } from '../engines/triviaEngine'

import styles from './Trivia.style'

class Trivia extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionNumber: 0,
      questions: [],
      question: {},
      score: 0,
    }
  }

  componentWillMount() {
    const {
      questions,
    } = this.props

    const {
      questionNumber,
    } = this.state

    this.setState({
      questions,
      question: this.getQuestion(questions, questionNumber),
    })
  }

  getQuestion = (questions, questionNumber) => prepareQuestion(questions[questionNumber])

  nextQuestion = () => {
    const {
      questions,
      questionNumber,
      score,
    } = this.state

    const {
      onFinish,
    } = this.props

    if (questionNumber < questions.length - 1) {
      const nextQuestionNumber = questionNumber + 1
      const newQuestion = this.getQuestion(questions, nextQuestionNumber)

      this.setState({
        questionNumber: nextQuestionNumber,
        question: newQuestion,
      })
    } else {
      onFinish({ score })
    }
  }

  handlePress = ({ correctAwnser }) => {
    const {
      questions,
      questionNumber,
      score,
    } = this.state

    if (correctAwnser) {
      const question = questions[questionNumber]
      const questionDifficulty = question.difficulty

      const finalScore = calculateScore(score, questionDifficulty)

      this.setState({
        score: finalScore,
      })
    }

    this.nextQuestion()
  }

  render() {
    const {
      onLeave,
    } = this.props

    const {
      questionNumber,
      questions,
      question,
    } = this.state

    return (
      <View style={styles.triviaContainer}>
        <View style={styles.headerContainer}>
          <QuestionHeader
            questionPosition={questionNumber + 1}
            questionsLength={questions.length}
          />
        </View>
        <View style={styles.questionContainer}>
          <QuestionCard question={question.question} />
        </View>
        <View style={styles.optionsContainer}>
          {
            question.options.map((item, idx) => (
              <QuestionOption
                answer={item.answer}
                correct={item.correct}
                key={idx} // eslint-disable-line react/no-array-index-key
                onPress={this.handlePress}
              />
            ))
          }
        </View>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            label="Leave"
            onPress={onLeave}
          />
        </View>
      </View>
    )
  }
}

Trivia.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
}

export default Trivia
