test('basic object destructuring', () => {
  let obj = {
    x: 15,
    y: -3,
  };

  let { x, y } = obj;

  expect(x).toBe(15);
  expect(y).toBe(-3);
});

test('is an expression', () => {
  let x = 0, y = 0;

  let obj = {
    x: 15,
    y: -3,
  };

  ({ x, y } = obj);

  expect(x).toBe(15);
  expect(y).toBe(-3);
});

test('is undefined if property does not exist', () => {
  let obj = {
    x: 15,
  };

  let { y } = obj;

  expect(y).toBeUndefined();
});

test('accepts default value', () => {
  let obj = {
    x: 15,
  };

  let { y = 0 } = obj;

  expect(y).toBe(0);
});
