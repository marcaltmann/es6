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

test('asynchronous task runner', done => {
  function fetchData(delay) {
    return function(callback) {
      setTimeout(function() {
        callback(null, 'Hi!');
      }, delay);
    };
  }

  function run(taskDef) {
    let task = taskDef();

    let result = task.next();

    step();

    function step() {
      if (!result.done) {
        if (typeof result.value === 'function') {
          result.value(function(err, data) {
            if (err) {
              result = task.throw(err);
              return;
            }

            result = task.next(data);
            step();
          })
        } else {
          result = task.next(result.value);
          step();
        }
      }
    }
  }

  run(function *() {
    let result = yield fetchData(50);
    expect(result).toBe('Hi!');
    done();
  });
});

test('asynchronous task runner with exception', done => {
  function fetchData(delay) {
    return function(callback) {
      setTimeout(function() {
        callback(new Error('Boom'), null);
      }, delay);
    };
  }

  function run(taskDef) {
    let task = taskDef();

    let result = task.next();

    step();

    function step() {
      if (!result.done) {
        if (typeof result.value === 'function') {
          result.value(function(err, data) {
            if (err) {
              result = task.throw(err);
              return;
            }

            result = task.next(data);
            step();
          })
        } else {
          result = task.next(result.value);
          step();
        }
      }
    }
  }

  run(function *() {
    try {
      let result = yield fetchData(50);
    } catch (e) {
      expect(e.message).toBe('Boom');
    }
    done();
  });
});
