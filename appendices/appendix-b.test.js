test('exponentiation operator', () => {
  let pow1 = Math.pow(2, 8);
  let pow2 = 2 ** 8;

  expect(pow1).toBe(256);
  expect(pow2).toBe(256);
});

test('Array.prototype.includes()', () => {
  let values = ['a', 'b', 'c'];

  expect(values.includes('a')).toBeTruthy();
  expect(values.includes('a', 2)).toBeFalsy();
  expect(values.includes('d')).toBeFalsy();
});

test('Array.prototype.includes() and NaN', () => {
  let values = [1, 2, NaN];

  expect(values.indexOf(NaN)).toBe(-1);
  expect(values.includes(NaN)).toBeTruthy();
});
