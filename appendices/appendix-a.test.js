test('identifying integers', () => {
  expect(Number.isInteger(2)).toBeTruthy();
  expect(Number.isInteger(2.0)).toBeTruthy();
  expect(Number.isInteger(3.14)).toBeFalsy();
});

test('testing for safe integers', () => {
  let inside = Number.MAX_SAFE_INTEGER;
  let outside = inside + 1;

  expect(inside).toBe(9007199254740991);
  expect(Number.isSafeInteger(inside)).toBeTruthy();
  expect(outside).toBe(9007199254740992);
  expect(Number.isSafeInteger(outside)).toBeFalsy();
});

test('using unicode identifiers', () => {
  const \u{20C34} = 'hello';  // Does not work with let.

  expect(\u{20C34}).toBe('hello');
  expect(𠰴).toBe('hello');
});
