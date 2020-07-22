test('simple generator', () => {
  function *alphabetGenerator() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  let iterator = alphabetGenerator();

  expect(iterator.next()).toEqual({
    done: false,
    value: 'a',
  });
  expect(iterator.next().value).toBe('b');
  expect(iterator.next().value).toBe('c');
  expect(iterator.next()).toEqual({
    done: true,
    value: undefined,
  });
});

test('more complex generator', () => {
  let powerOfTwoGenerator = function *() {
    for (let i = 1; i <= 8; i++) {
      yield Math.pow(2, i);
    }
  }
  let iterator = powerOfTwoGenerator();

  expect(iterator.next().value).toBe(2);
  expect(iterator.next().value).toBe(4);
  expect(iterator.next().value).toBe(8);
  expect(iterator.next().value).toBe(16);
  expect(iterator.next().value).toBe(32);
  expect(iterator.next().value).toBe(64);
  expect(iterator.next().value).toBe(128);
  expect(iterator.next().value).toBe(256);
  expect(iterator.next().value).toBeUndefined();
});
