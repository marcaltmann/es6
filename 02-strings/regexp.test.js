test('sticky flag', () => {
  // The sticky flag is like a dynamic ^ matcher...
  let text = 'word1 word2 word3';
  let regexp = /word/y;

  expect(regexp.sticky).toBe(true);
  expect(regexp.lastIndex).toBe(0);

  let result = regexp.exec(text);

  expect(typeof result).toBe('object');
  expect(result.length).toBe(1);
  expect(result[0]).toBe('word');
  expect(regexp.lastIndex).toBe(4);

  // Does not match again, because last index is in the position of the space
  // before 'word2'.
  result = regexp.exec(text);
  expect(result).toBeNull();
  expect(regexp.lastIndex).toBe(0);
});

test('duplicating regexps', () => {
  let re1 = /^.$/;
  let re2 = new RegExp(re1, 'g');
  let re3 = new RegExp(re2, 'u');

  expect(re1.flags).toEqual('');
  expect(re2.flags).toEqual('g');
  expect(re3.flags).toEqual('u');
});

test('regexp object properties', () => {
  let re1 = /^.$/gu;

  expect(re1.source).toEqual('^.$');
  expect(re1.flags).toEqual('gu');

  expect(re1.global).toBe(true);
  expect(re1.unicode).toBe(true);
});
