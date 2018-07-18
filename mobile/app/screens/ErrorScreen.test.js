import React from 'react'
import renderer from 'react-test-renderer'
import ErrorScreen from './ErrorScreen'

import { screenScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const tree = renderer
    .create(<ErrorScreen {...screenScenario} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
