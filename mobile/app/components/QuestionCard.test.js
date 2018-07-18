import React from 'react'
import renderer from 'react-test-renderer'
import QuestionCard from './QuestionCard'

import { questionScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const props = { question: questionScenario.question }
  const tree = renderer
    .create(<QuestionCard {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
