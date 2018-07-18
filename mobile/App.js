import React, { Component } from 'react'
import { ScreenOrientation } from 'expo'
import { createStackNavigator } from 'react-navigation'

import StartupScreen from './app/screens/StartupScreen'
import QuestionScreen from './app/screens/QuestionScreen'
import ScoreScreen from './app/screens/ScoreScreen'
import ErrorScreen from './app/screens/ErrorScreen'

import ErrorBoundary from './app/containers/ErrorBoundary'

class App extends Component {
  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)
  }

  render() {
    return (
      <ErrorBoundary>
        <AppNavigation />
      </ErrorBoundary>
    )
  }
}

const AppNavigation = createStackNavigator({
  StartupScreen: { screen: StartupScreen },
  QuestionScreen: { screen: QuestionScreen },
  ScoreScreen: { screen: ScoreScreen },
  ErrorScreen: { screen: ErrorScreen },
}, {
  initialRouteName: 'StartupScreen',
  headerMode: 'null',
})

export default App
