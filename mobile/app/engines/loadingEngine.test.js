import loadingEngine from './loadingEngine'

jest.useFakeTimers()

test('the loading engine should work correctly', () => {
  const callback = jest.fn()

  // Fast-forward until all timers have been executed
  jest.runAllTimers()

  loadingEngine(callback)
    .then(() => {
      expect(callback).toBeCalled()
      expect(callback).toHaveBeenCalled()
    })

    // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled()
})
