import React from 'react'
import { colors } from '../styles'

import Button from './Button'

const PrimaryButton = props => (
  <Button
    {...props}
    backgroundColor={colors.secondary}
    color={colors.primary}
  />
)

export default PrimaryButton
