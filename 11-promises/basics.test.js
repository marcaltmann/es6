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
