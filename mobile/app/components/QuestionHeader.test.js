import React from 'react'
import renderer from 'react-test-renderer'
import QuestionHeader from './QuestionHeader'

test('renders correctly', () => {
  const props = { questionsLength: 10, questionPosition: 1 }
  const tree = renderer
    .create(<QuestionHeader {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
