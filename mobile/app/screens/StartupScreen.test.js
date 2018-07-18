import React from 'react'
import renderer from 'react-test-renderer'
import StartupScreen from './StartupScreen'

import { screenScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const tree = renderer
    .create(<StartupScreen {...screenScenario} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
