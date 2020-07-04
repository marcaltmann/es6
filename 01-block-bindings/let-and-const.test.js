test('const is const', () => {
  expect(() => {
    const a = 0;
    a = 10;
  }).toThrow(TypeError);
});

test('temporal dead zone', () => {
  let typeOfA = typeof a;

  expect(typeOfA).toBe('undefined');

  expect(() => {
    let typeOfB = typeof b;

    let b = 5;
  }).toThrow(ReferenceError);
});

test('special let behaviour in loops', () => {
  const funcs = [];

  for (let i = 0; i < 10; i++) {
    funcs.push(function() {
      return i;
    });
  }

  expect(funcs.map(f => f()).join('')).toBe('0123456789');
});
