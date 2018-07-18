import { StyleSheet } from 'react-native'
import {
  alignVh, borderRadius, fontSize, padding,
} from '../styles'

export default StyleSheet.create({
  viewContainer: {
    backgroundColor: '#fff',
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
