test('yield expressions and next arguments', () => {
  function *generator() {
    let x = yield 1;
    let y = yield x + 2;
    yield y + 10;
  }
  let iterator = generator();

  expect(iterator.next().value).toBe(1);
  expect(iterator.next(1).value).toBe(3);
  expect(iterator.next(10).value).toBe(20);
});

test('return statements inside generators', () => {
  function *numbersGen() {
    yield 1;
    return 10;
    yield 2;
    yield 3;
  }
  let numbers = numbersGen();

  expect(numbers.next()).toEqual({
    done: false,
    value: 1,
  });
  expect(numbers.next()).toEqual({
    done: true,
    value: 10,
  });
  expect(numbers.next()).toEqual({
    done: true,
    value: undefined,
  });
});

test('throw() function without the generator catching', () => {
  function *numbersGen() {
    yield 1;
    yield 2;
    yield 3;
  }
  let numbers = numbersGen();

  expect(numbers.next().value).toBe(1);
  expect(() => {
    numbers.throw(new Error('Boom'));
  }).toThrow('Boom');
});

test('throw() function with catch clause within generator', () => {
  function *numbersGen() {
    try {
      yield 1;
      yield 2;
      yield 3;
    } catch (e) {
      yield -1;
      yield -2;
      yield -3;
    }
  }
  let numbers = numbersGen();

  expect(numbers.next().value).toBe(1);
  expect(numbers.throw(new Error('Boom')).value).toBe(-1);
  expect(numbers.next().value).toBe(-2);
  expect(numbers.next().value).toBe(-3);
  expect(numbers.next().value).toBe(undefined);
});
