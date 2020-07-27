test('Array.of() method', () => {
  let arr1 = Array.of(5);
  let arr2 = Array.of(1, 2, 3);
  let arr3 = Array.of('a', 'b', 5);

  expect(arr1).toEqual([5]);
  expect(arr2).toEqual([1, 2, 3]);
  expect(arr3).toEqual(['a', 'b', 5]);
});

test('Array.from() with iterables', () => {
  let createNumbers = function *() {
    yield 1;
    yield 2;
    yield 3;
  };
  let iterator1 = createNumbers();
  let arr = Array.from(iterator1);
  let iterator2 = createNumbers();
  let arrSquared = Array.from(iterator2, a => a * a);

  expect(arr).toEqual([1, 2, 3]);
  expect(arrSquared).toEqual([1, 4, 9]);
});

test('Array.from() with array-like object', () => {
  function arrayFromArgs() {
    return Array.from(arguments);
  }

  expect(arrayFromArgs()).toEqual([]);
  expect(arrayFromArgs(2, 5, 'a', 'b')).toEqual([2, 5, 'a', 'b']);
});
