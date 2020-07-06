test('codePointAt()', () => {
  let c = '𠰴';

  let codePoint = c.codePointAt(0);

  expect(c.codePointAt(0)).toBe(134196);
});

test('fromCodePoint()', () => {
  let c = String.fromCodePoint(134196);

  expect(c).toBe('𠰴');
});

test('normalize()', () => {
  let string1 = '\u00F1';
  let string2 = '\u006E\u0303';

  expect(string1.normalize()).toEqual(string1);
  expect(string1.normalize()).toEqual(string1);
});

test('u flag for regular expressions', () => {
  let text = '𠰴';

  expect(/^.$/.test(text)).toBe(false);
  expect(/^.$/u.test(text)).toBe(true);
});
