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

test('arguments object does not change when defaults are used, even in non-strict mode',
  () => {
  function sum(a, b) {
    a = 2;
    b = 2;
    return a === arguments[0] && b === arguments[1];
  }

  expect(sum(1, 1)).toBe(true);
  expect(sum(1)).toBe(false);
});

test('default parameter expressions', () => {
  let counter = 5;

  function defaultValue() {
    return counter++;
  }

  function sum(a, b = defaultValue()) {
    return a + b;
  }

  expect(sum(1, 1)).toBe(2);
  expect(sum(1)).toBe(6);
  expect(sum(2, 2)).toBe(4);
  expect(sum(1)).toBe(7);
});

test('default parameter expression using previous value', () => {
  function sum(a, b = a) {
    return a + b;
  }

  expect(sum(3, 7)).toBe(10);
  expect(sum(3)).toBe(6);
});

test('also work with the Function constructor', () => {
  let sum = new Function('a', 'b = a', 'return a + b');

  expect(sum(1, 2)).toBe(3);
  expect(sum(2)).toBe(4);
});
