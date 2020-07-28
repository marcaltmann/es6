test('find() and findIndex()', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let fn1 = (el) => el > 5;
  let value1 = arr.find(fn1);
  let index1 = arr.findIndex(fn1);

  expect(value1).toBe(6);
  expect(index1).toBe(5);

  let fn2 = (el) => el > 10;
  let value2 = arr.find(fn2);
  let index2 = arr.findIndex(fn2);

  expect(value2).toBeUndefined();
  expect(index2).toBe(-1);
});

test('indexOf() and lastIndexOf() from ES5 for comparison', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let index1 = arr.indexOf(6);
  let lastIndex1 = arr.lastIndexOf(6);

  expect(index1).toBe(5);
  expect(lastIndex1).toBe(15);

  let index2 = arr.indexOf(15);
  let lastIndex2 = arr.lastIndexOf(15);

  expect(index2).toBe(-1);
  expect(lastIndex2).toBe(-1);
});

test('fill()', () => {
  let arr = [1, 2, 3, 4, 5];

  arr.fill('a');
  expect(arr).toEqual(['a', 'a', 'a', 'a', 'a']);

  arr.fill('b', 3);
  expect(arr).toEqual(['a', 'a', 'a', 'b', 'b']);

  arr.fill('c', 2, 3);
  expect(arr).toEqual(['a', 'a', 'c', 'b', 'b']);

  arr.fill('d', -2, -1);
  expect(arr).toEqual(['a', 'a', 'c', 'd', 'b']);
});

test('copyWithin()', () => {
  let origArray = () => [1, 2, 3, 4, 5];

  let arr = origArray();
  arr.copyWithin(3, 0);
  expect(arr).toEqual([1, 2, 3, 1, 2]);

  arr = origArray();
  arr.copyWithin(2, 0);
  expect(arr).toEqual([1, 2, 1, 2, 3]);

  arr = origArray();
  arr.copyWithin(2, 0, 1);
  expect(arr).toEqual([1, 2, 1, 4, 5]);
});
