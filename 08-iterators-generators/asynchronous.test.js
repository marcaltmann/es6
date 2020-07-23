test('simple task runner or something', () => {
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
        result = task.next();

        expect(typeof result).toBe('object');

        step();
      }
    }
  }

  run(function *() {
    yield 1;
    yield 2;
  });
});
