import React from 'react'
import renderer from 'react-test-renderer'
import QuestionScreen from './QuestionScreen'

import { screenScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const tree = renderer
    .create(<QuestionScreen {...screenScenario} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
