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
