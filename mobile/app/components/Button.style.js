import { StyleSheet } from 'react-native'
import { borderRadius, padding } from '../styles'

export default StyleSheet.create({
  buttonTouch: {
    paddingVertical: padding.md,
    borderRadius: borderRadius.sm,
    width: '100%',
    display: 'flex',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
  },
})
