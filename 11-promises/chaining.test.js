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

  let p2 = p1.then(
    (result) => {
      return result + 1;
    }
  );

  p2.then(
    (result) => {
      expect(result).toBe(43);
      done();
    }
  );

  expect(p2).toBeInstanceOf(Promise);
});
