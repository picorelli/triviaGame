import Expo from 'expo'
import themeSong from '../assets/sounds/theme.mp3'

import logErrorService from './errorEngine'

export const THEME_SONG = 'themeSong'
export const CORRECT_ANWSER_SONG = 'correctAnwserSong'
export const WRONG_ANWSER_SONG = 'correctAnwserSong'

export const appSongs = {
  [THEME_SONG]: themeSong,
  [CORRECT_ANWSER_SONG]: themeSong,
  [WRONG_ANWSER_SONG]: themeSong,
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
