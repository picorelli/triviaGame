import {
  calculateScore,
  getAnwserOptions,
  normalizeQuestion,
  EASY_SCORE,
  MEDIUM_SCORE,
  HARD_SCORE,
} from './triviaEngine'

import { questionScenario } from '../tests/scenarios'

test('correct answers and incorrect answers should be merged', () => {
  const anwserOptions = getAnwserOptions(
    'Mr. Potato Head',
    ['Slinky Dog', 'Hamm', 'Rex'],
  )
  const anwsersMock = [
    {
      answer: 'Mr. Potato Head',
      correct: true,
    }, {
      answer: 'Slinky Dog',
      correct: false,
    },
    {
      answer: 'Hamm',
      correct: false,
    }, {
      answer: 'Rex',
      correct: false,
    }]

  expect(anwserOptions).toEqual(anwsersMock)
})

test('the calculator should return the correct score for the difficulty', () => {
  const scoreEasy = calculateScore(0, EASY_SCORE)
  const scoreMedium = calculateScore(0, MEDIUM_SCORE)
  const scoreHard = calculateScore(0, HARD_SCORE)

  expect(scoreEasy).toBe(1000)
  expect(scoreMedium).toBe(2000)
  expect(scoreHard).toBe(3000)
})

test('the question data should be normalized in the correct way', () => {
  const question = normalizeQuestion(questionScenario)
  const optionsMock = [
    { answer: 'Mr. Potato Head', correct: true },
    { answer: 'Slinky Dog', correct: false },
    { answer: 'Hamm', correct: false },
    { answer: 'Rex', correct: false },
  ]

  expect(question).toEqual(expect.objectContaining({ options: optionsMock }))
})
