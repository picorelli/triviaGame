import React from 'react'
import renderer from 'react-test-renderer'
import ScreenProvider from './ScreenProvider'

import LoadingScreen from '../screens/LoadingScreen'

test('renders correctly', () => {
  const comp = (
    <ScreenProvider>
      <LoadingScreen />
    </ScreenProvider>
  )
  const tree = renderer
    .create(comp)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
