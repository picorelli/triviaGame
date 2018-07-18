import React from 'react'
import renderer from 'react-test-renderer'
import ScoreScreen from './ScoreScreen'

import { screenScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const tree = renderer
    .create(<ScoreScreen {...screenScenario} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
