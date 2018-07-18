export const shuffleArray = (array) => { // eslint-disable-line import/prefer-default-export
  const newArray = array
  let counter = array.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)

    counter -= 1

    const temp = newArray[counter]
    newArray[counter] = newArray[index]
    newArray[index] = temp
  }

  return newArray
}
