test('simple task runner', () => {
  expect.assertions(3);

  function run(taskDef) {
    let task = taskDef();

    let result = task.next();

    expect(result).toEqual({
      done: false,
      value: 1,
    })

    step();

    function step() {
      if (!result.done) {
        result = task.next(result.value);

        expect(typeof result).toBe('object');

        step();
      }
    }
  }

  run(function *() {
    let a = yield 1;
    yield a + 2;
  });
});
