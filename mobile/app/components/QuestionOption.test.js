import React from 'react'
import renderer from 'react-test-renderer'
import QuestionOption from './QuestionOption'

test('renders correctly', () => {
  const props = {
    correct: true,
    answer: 'Mr. Potato Head',
    onPress: jest.fn(),
  }

  const tree = renderer
    .create(<QuestionOption {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
