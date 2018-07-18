import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Trivia from '../containers/Trivia'
import ScreenProvider from '../containers/ScreenProvider'

import loadingEngine from '../engines/loadingEngine'
import triviaAPI from '../triviaAPI'

class QuestionScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      questions: [],
    }
  }

  componentWillMount() {
    this.fetchTriviaData()
  }

  fetchTriviaData = () => {
    const {
      navigation,
    } = this.props

    const amount = 10
    const triviaData = triviaAPI({ amount })

    loadingEngine(triviaData)
      .then(questions => this.setState({ questions, loaded: true }))
      .catch(() => navigation.replace('ErrorScreen'))
  }

  handleFinish = ({ score }) => {
    const {
      navigation,
    } = this.props

    navigation.replace('ScoreScreen', { score })
  }

  handleLeave = () => {
    const {
      navigation,
    } = this.props

    navigation.navigate('StartupScreen')
  }

  render() {
    const {
      questions,
      loaded,
    } = this.state

    return (
      <ScreenProvider loaded={loaded}>
        <Trivia
          questions={questions}
          onFinish={this.handleFinish}
          onLeave={this.handleLeave}
        />
      </ScreenProvider>
    )
  }
}

QuestionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default QuestionScreen
