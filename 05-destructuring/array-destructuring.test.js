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
