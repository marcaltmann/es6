test('basic promise test', (done) => {
  let promise = Promise.resolve(42);

  promise.then(
    (result) => {
      expect(result).toBe(42);
      done();
    }
  );
});

test('failing promise', (done) => {
  let promise = Promise.reject('Error');

  promise.then(
    null,
    (error) => {
      expect(error).toBe('Error');
      done();
    }
  );
});

test('code execution order 1', (done) => {
  let order = new Array();

  order.push(1);

  let promise = new Promise((resolve, reject) => {
    order.push(2);
    resolve();
  });

  promise.then(
    (result) => {
      order.push(3);

      expect(order.length).toBe(4);
      expect(order).toEqual([1, 2, 4, 3]);
      done();
    }
  );

  order.push(4);
});

test('code execution order 2', (done) => {
  // Job queue is not executed until "program" ends.

  let result = (function () {
    let order = new Array();

    order.push(1);

    let promise = new Promise((resolve, reject) => {
      order.push(2);
      resolve();
    });

    promise.then(
      (result) => {
        order.push(3);
      }
    );

    order.push(4);

    return order;
  })();

  expect(result.length).toBe(3);
  expect(result).toEqual([1, 2, 4]);
  done();
});

test('error handling with then', (done) => {
  let promise = new Promise((resolve, reject) => {
    throw new Error('Promise failed.');
  });

  promise.then(
    null,
    (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Promise failed.');
      done();
    }
  );
});

test('error handling with catch', (done) => {
  let promise = new Promise((resolve, reject) => {
    throw new Error('Promise failed.');
  });

  promise.catch(
    (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Promise failed.');
      done();
    }
  );
});
