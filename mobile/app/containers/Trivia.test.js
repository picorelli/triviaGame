import React from 'react'
import renderer from 'react-test-renderer'
import Trivia from './Trivia'

import { triviaScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const tree = renderer
    .create(<Trivia {...triviaScenario} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
