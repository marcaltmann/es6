test('basic array destructuring', () => {
  let arr = [10, 20];

  let [x, y] = arr;

  expect(x).toBe(10);
  expect(y).toBe(20);
});
