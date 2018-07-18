import { StyleSheet } from 'react-native'
import {
  alignVh,
  colors,
  borderRadius,
  fontSize,
  padding,
} from '../styles'

export default StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.secondary,
    padding: padding.lg,
    borderRadius: borderRadius.sm,
    width: '100%',
    ...alignVh,
  },
  textContainer: {
    fontSize: fontSize.sm,
    textAlign: 'center',
  },
})
