import { StyleSheet } from 'react-native'
import { alignVh, colors, fontSize } from '../styles'

export default StyleSheet.create({
  viewContainer: {
    ...alignVh,
  },
  textContainer: {
    color: colors.secondary,
    fontSize: fontSize.md,
    fontWeight: '700',
  },
})
