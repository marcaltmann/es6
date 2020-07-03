test('basic array destructuring', () => {
  let arr = [10, 20];

  let [x, y] = arr;

  expect(x).toBe(10);
  expect(y).toBe(20);
});

test('leaving elements out is possible', () => {
  let arr = [1, 2, 3, 4, 5];

  let [, , , , a] = arr;

  expect(a).toBe(5);
});

test('works as an expression', () => {
  let x = 0, y = 0;
  let arr = [100, 101];

  [x, y] = arr;

  expect(x).toBe(100);
  expect(y).toBe(101);
});

test('swapping variables', () => {
  let x = 0, y = 1;

  [x, y] = [y, x];

  expect(x).toBe(1);
  expect(y).toBe(0);
});

test('with default values', () => {
  let arr = [1];

  let [x = 3, y = 5] = arr;

  expect(x).toBe(1);
  expect(y).toBe(5);
});

test('nested array destructuring', () => {
  let arr = ['a', [1, 2, 3], 'b'];

  let [x, [y]] = arr;

  expect(x).toBe('a');
  expect(y).toBe(1);
});

test('can store rest items', () => {
  let arr = [1, 2, 3];

  let [x, ...rest] = arr;

  expect(x).toBe(1);
  expect(rest).toEqual([2, 3]);
});

test('can clone arrays', () => {
  let arr = [5, 'a', 6.7];

  let [...cloned] = arr;

  expect(cloned).not.toBe(arr);
  expect(cloned).toEqual(arr);
});
