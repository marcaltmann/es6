test('simple task runner', () => {
  let savedResults = new Array();

  function run(taskDef) {
    let task = taskDef();

    let result = task.next();
    savedResults.push(result);

    step();

    function step() {
      if (!result.done) {
        result = task.next(result.value);
        savedResults.push(result);

        step();
      }
    }
  }

  run(function *() {
    let a = yield 1;
    yield a + 2;
  });

  expect(savedResults.length).toBe(3);
  expect(savedResults[0].value).toBe(1);
  expect(savedResults[1].value).toBe(3);
  expect(savedResults[2].value).toBeUndefined();
});
