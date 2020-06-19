test('object destructuring', () => {
  let obj = {
    x: 15,
    y: -3,
  };

  let { x, y } = obj;

  expect(x).toBe(15);
  expect(y).toBe(-3);
});
