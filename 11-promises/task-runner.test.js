function run(taskDef) {
  let task = taskDef();

  let result = task.next();

  (function step() {
    if (!result.done) {
      // Resolve to a promise to make it easy.
      let promise = Promise.resolve(result.value);

      promise.then(
        (value) => {
          result = task.next(value);
          step();
        },
        (error) => {
          result = task.throw(error);
          step();  // Version from chapter 8 stops here.
        }
      );
    }
  }());
}

test('asynchronous task runner with succeeding task', (done) => {
  function fetchData(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(42);
      }, delay);
    });
  }

  run(function *() {
    let result = yield fetchData(50);
    expect(result).toBe(42);
    done();
  });
});

test('asynchronous task runner with failing task', (done) => {
  function fetchData(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        reject(new Error('Boom!'));
      }, delay);
    });
  }

  run(function *() {
    try {
      let result = yield fetchData(50);
    } catch (error) {
      expect(error.message).toBe('Boom!');
    }
    done();
  });
});
