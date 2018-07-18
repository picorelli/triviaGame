import { StyleSheet } from 'react-native'
import { alignVh, colors, fontSize } from '../styles'

export default StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    height: '100%',
    ...alignVh,
  },
  awardContainer: {
    height: '30%',
    width: '30%',
  },
  textContainer: {
    color: colors.secondary,
    fontSize: fontSize.md,
    fontWeight: '700',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
