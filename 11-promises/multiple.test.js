test('Promise.all() resolving', (done) => {
  let p1 = Promise.resolve(42);
  let p2 = new Promise((resolve, reject) => {
    resolve(43);  // Does not seem to be a difference to Promise.resolve().
  });
  let p3 = Promise.resolve(44);

  let p4 = Promise.all([p1, p2, p3]);

  p4.then((results) => {
    expect(results).toEqual([42, 43, 44]);
    done();
  });
});

test('Promise.all() rejecting', (done) => {
  let p1 = Promise.resolve(42);
  let p2 = Promise.reject(new Error('Boom!'));
  let p3 = Promise.resolve(44);

  let p4 = Promise.all([p1, p2, p3]);

  p4.catch((reason) => {
    expect(reason.message).toBe('Boom!');
    done();
  });
});

test('Promise.race() resolving', (done) => {
  let p1 = new Promise((resolve, reject) => {
    resolve(42);
  });
  let p2 = Promise.resolve(43);
  let p3 = Promise.resolve(44);

  let p4 = Promise.race([p1, p2, p3]);

  p4.then((result) => {
    expect(result).toEqual(42);
    done();
  });
});

test('Promise.race() rejecting', (done) => {
  let p1 = new Promise((resolve, reject) => {
    reject(new Error('Boom!'));
  });
  let p2 = Promise.resolve(43);
  let p3 = Promise.resolve(44);

  let p4 = Promise.race([p1, p2, p3]);

  p4.catch((reason) => {
    expect(reason.message).toBe('Boom!');
    done();
  });
});
