import { StyleSheet } from 'react-native'
import {
  borderRadius,
  colors,
  fontSize,
  padding,
} from '../styles'

export default StyleSheet.create({
  optionTouchContainer: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.sm,
    marginBottom: 5,
    paddingVertical: padding.md,
    width: '100%',
  },
  textContainer: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: fontSize.sm,
    textAlign: 'center',
  },
})
