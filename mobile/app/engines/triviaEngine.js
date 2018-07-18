import he from 'he'
import { shuffleArray } from '../utils'

export const EASY_SCORE = 'easy'
export const MEDIUM_SCORE = 'medium'
export const HARD_SCORE = 'hard'

const scoreTable = {
  [EASY_SCORE]: 1,
  [MEDIUM_SCORE]: 2,
  [HARD_SCORE]: 3,
}

export const calculateScore = (currentScore = 0, difficulty = 'easy') => {
  const weightScore = scoreTable[difficulty]

  return currentScore + (weightScore * 1000)
}

export const getAnwserOptions = (corretAnwser = '', incorrectAnswers = []) => {
  const options = []

  options.push({
    answer: he.unescape(corretAnwser),
    correct: true,
  })

  incorrectAnswers.forEach((answer) => {
    options.push({
      answer: he.unescape(answer),
      correct: false,
    })
  })

  return options
}

export const normalizeQuestion = (questionData) => {
  const newQuestionData = questionData

  const correctAnswer = questionData.correct_answer
  const incorrectAnswers = questionData.incorrect_answers

  if (correctAnswer && incorrectAnswers) {
    newQuestionData.options = getAnwserOptions(correctAnswer, incorrectAnswers)
  }

  newQuestionData.question = he.unescape(questionData.question)

  return newQuestionData
}

export const prepareQuestion = (questionData) => {
  const {
    options,
  } = questionData

  const newQuestionData = normalizeQuestion(questionData)

  if (options) {
    newQuestionData.options = shuffleArray(options)
  }

  return newQuestionData
}
