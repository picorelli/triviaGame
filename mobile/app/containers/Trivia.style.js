import { StyleSheet } from 'react-native'
import { padding } from '../styles'

export default StyleSheet.create({
  triviaContainer: {
    flexDirection: 'column',
    height: '100%',
  },
  headerContainer: {
  },
  questionContainer: {
    height: '30%',
  },
  optionsContainer: {
    height: '40%',
    paddingTop: padding.md,
  },
  bottomContainer: {

    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
