test('undefined also triggers default', () => {
  function doSomething(name, position = 'default') {
    return position;
  }

  expect(doSomething('Schmidt', 'superior')).toBe('superior');
  expect(doSomething('Schmidt', null)).toBe(null);
  expect(doSomething('Schmidt')).toBe('default');
  expect(doSomething('Schmidt', undefined)).toBe('default');
});

test('any position is possible', () => {
  function returnName(name = 'Dirk', age) {
    return name;
  }

  expect(returnName('Mark', 30)).toBe('Mark');
  expect(returnName(undefined, 50)).toBe('Dirk');
});
