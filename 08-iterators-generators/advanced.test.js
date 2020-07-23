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
  expect(numbers.next().value).toBeUndefined();
});

test('combining generators through delegation', () => {
  function *createNumberIterator() {
    yield 1;
    yield 2;
  }
  function *createCharacterIterator() {
    yield 'a';
    yield 'b';
  }
  function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createCharacterIterator();
    yield 'The End';
  }
  let iterator = createCombinedIterator();

  expect(iterator.next().value).toBe(1);
  expect(iterator.next().value).toBe(2);
  expect(iterator.next().value).toBe('a');
  expect(iterator.next().value).toBe('b');
  expect(iterator.next().value).toBe('The End');
});

test('using delegation with return', () => {
  function *createNumberIterator() {
    yield 1;
    yield 2;
    return 3;
  }
  function *createCountIterator(n) {
    for (let i = 1; i <= n; i++) {
      yield i;
    }
  }
  function *createCombinedIterator() {
    let a = yield *createNumberIterator();
    yield a;
    yield *createCountIterator(a);
  }
  let iterator = createCombinedIterator();

  expect(iterator.next().value).toBe(1);
  expect(iterator.next().value).toBe(2);
  expect(iterator.next().value).toBe(3);
  expect(iterator.next().value).toBe(1);
  expect(iterator.next().value).toBe(2);
  expect(iterator.next().value).toBe(3);
  expect(iterator.next().value).toBeUndefined();
});

test('using delegation with a string', () => {
  function *createIterator() {
    yield 'Hello';
    yield *'Roger';
  }
  let iterator = createIterator();

  expect(iterator.next().value).toBe('Hello');
  expect(iterator.next().value).toBe('R');
  expect(iterator.next().value).toBe('o');
  expect(iterator.next().value).toBe('g');
  expect(iterator.next().value).toBe('e');
  expect(iterator.next().value).toBe('r');
  expect(iterator.next().value).toBeUndefined();
});
