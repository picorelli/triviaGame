const getWaitPromise = time => new Promise(resolve => setTimeout(resolve, time))

export default (fn, minimumLoadingTime = 2000) => {
  const fnPromise = Promise.resolve(fn)
  const waitPromise = getWaitPromise(minimumLoadingTime)

  return Promise.all([fnPromise, waitPromise])
    .then((values = []) => values[0])
}
