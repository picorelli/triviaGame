import React from 'react'
import renderer from 'react-test-renderer'
import ErrorBoundary from './ErrorBoundary'

import LoadingScreen from '../screens/LoadingScreen'

test('renders correctly', () => {
  const comp = (
    <ErrorBoundary>
      <LoadingScreen />
    </ErrorBoundary>
  )
  const tree = renderer
    .create(comp)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
