test('simple chaining', (done) => {
  /**
   * The chaining is taken apart here in order to make assertions.
   * But you could also write it like so:
   * p1.then(
   *   ...
   * ).then(
   *   ...
   * );
   */
  expect.assertions(2);

  let p1 = Promise.resolve(42);

  let p2 = p1.then((result) => {
    return result + 1;
  });

  p2.then((result) => {
    expect(result).toBe(43);
    done();
  });

  expect(p2).toBeInstanceOf(Promise);
});

test('with an error', (done) => {
  let p1 = Promise.resolve(42);

  let p2 = p1.then((result) => {
    throw new Error('Boom!');
  });

  p2.catch((error) => {
    expect(error.message).toBe('Boom!');
    done();
  });

  expect(p2).toBeInstanceOf(Promise);
});

test('returning a promise', (done) => {
  expect.assertions(2);

  let p1 = Promise.reject('Boom!');

  let p2 = Promise.resolve(42);

  let p3 = p1.catch((reason) => {
    return p2;
  });

  p3.then((result) => {
    expect(result).toBe(42);
    done();
  });

  expect(p3).not.toBe(p2);
});
