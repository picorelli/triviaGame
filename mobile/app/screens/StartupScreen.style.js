import { StyleSheet } from 'react-native'
import { alignVh } from '../styles'

export default StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    width: '100%',
    ...alignVh,
  },
})
