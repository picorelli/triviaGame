import { shuffleArray } from './utils'

test('the array should be shuffled', () => {
  const shuffled = shuffleArray(['a', 'b', 'c', 'd'])

  expect(shuffled).not.toEqual(['a', 'b', 'c', 'd'])
})
