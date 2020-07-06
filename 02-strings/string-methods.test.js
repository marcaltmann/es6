test('includes()', () => {
  let text = 'The dog hunted the cat.';

  expect(text.includes('dog')).toBe(true);
  expect(text.includes('dog', 4)).toBe(true);
  expect(text.includes('dog', 5)).toBe(false);
});

test('startsWith()', () => {
  let text = 'The dog hunted the cat.';

  expect(text.startsWith('The')).toBe(true);
  expect(text.startsWith('dog', 4)).toBe(true);
  expect(text.startsWith('dog', 5)).toBe(false);
});

test('endsWith()', () => {
  let text = 'The dog hunted the cat.';

  expect(text.endsWith('cat.')).toBe(true);
  expect(text.endsWith('cat.', 1)).toBe(false);
  expect(text.endsWith('c', 20)).toBe(true);
});

test('repeat()', () => {
  expect('x'.repeat(3)).toEqual('xxx');
  expect('cat'.repeat(5)).toEqual('catcatcatcatcat');
});
