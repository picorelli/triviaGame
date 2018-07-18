import { colors } from '../styles'

export const questionScenario = {
  category: 'Entertainment: Cartoon & Animations',
  type: 'multiple',
  difficulty: 'medium',
  question: 'Which &quot;Toy Story&quot; character was voiced by Don Rickles?',
  correct_answer: 'Mr. Potato Head',
  incorrect_answers: ['Slinky Dog', 'Hamm', 'Rex'],
}

export const buttonScenario = {
  color: colors.secondary,
  backgroundColor: colors.primary,
  label: 'button',
  onPress: () => { },
}

export const screenScenario = {
  navigation: {
    navigate: () => {},
    getParam: () => {},
  },
}

export const triviaScenario = {
  questions: [questionScenario],
  onFinish: () => {},
  onLeave: () => {},
}
