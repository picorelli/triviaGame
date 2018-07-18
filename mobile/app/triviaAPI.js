const BASE_URL = 'https://opentdb.com'

export default ({ amount = 10 }) => fetch(`${BASE_URL}/api.php?amount=${amount}`) // eslint-disable-line no-undef
  .then(response => response.json())
  .then(response => response.results)
