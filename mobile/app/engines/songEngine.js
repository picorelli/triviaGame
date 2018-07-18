import Expo from 'expo'
import correctAnwserSong from '../assets/sounds/correctAnwser.mp3'

import logErrorService from './errorEngine'

export const CORRECT_ANWSER_SONG = 'correctAnwserSong'

export const appSongs = {
  [CORRECT_ANWSER_SONG]: correctAnwserSong,
}

const expoAudio = new Expo.Audio.Sound()

export const stopSong = async () => {
  try {
    await expoAudio.stopAsync()
  } catch (error) {
    logErrorService(error)
  }
}

export const playSong = async (keySong) => {
  try {
    const song = appSongs[keySong]

    await expoAudio.loadAsync(song)
    await expoAudio.playAsync()
  } catch (error) {
    logErrorService(error)
  }
}
