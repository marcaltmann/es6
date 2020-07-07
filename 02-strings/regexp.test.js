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
});
