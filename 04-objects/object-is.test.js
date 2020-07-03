test('object.is() method', () => {
  expect(Object.is(4, 4)).toBe(true);
  expect(Object.is('a', 'a')).toBe(true);
  expect(Object.is('a', 'b')).toBe(false);
});

test('for +0 vs. -0', () => {
  expect(+0 === -0).toBe(true);
  expect(Object.is(+0, -0)).toBe(false);
});

test('for NaN vs. NaN', () => {
  expect(NaN === NaN).toBe(false);
  expect(Object.is(NaN, NaN)).toBe(true);
});
