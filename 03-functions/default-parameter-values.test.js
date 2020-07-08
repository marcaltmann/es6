test('basic default values', () => {
  function sum(x, y = 0) {
    return x + y;
  }

  expect(sum(5, 4)).toBe(9);
  expect(sum(5)).toBe(5);
});
