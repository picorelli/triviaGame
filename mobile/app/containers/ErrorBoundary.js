import React, { Component } from 'react'
import PropTypes from 'prop-types'

import logErrorService from '../engines/errorEngine'
import ErrorScreen from '../screens/ErrorScreen'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    })

    logErrorService({ error, info })
  }

  render() {
    const {
      children,
    } = this.props

    const {
      hasError,
    } = this.state

    return hasError ? <ErrorScreen /> : children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ErrorBoundary
