import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

import { buttonScenario } from '../tests/scenarios'

test('renders correctly', () => {
  const tree = renderer
    .create(<Button {...buttonScenario} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
