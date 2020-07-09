test('new.target meta property', () => {
  function Thing(name) {
    if (new.target === Thing) {
      this.name = name;
    } else {
      throw new Error('Must be used with new keyword.')
    }
  }

  let table = new Thing('table');
  expect(table.name).toBe('table');

  expect(() => {
    let fake = Thing('fake');
  }).toThrow('Must be used with new keyword.');
});

test('block level function scope', () => {
  expect.assertions(4);
  expect(typeof dummy).toBe('undefined');

  if (true) {
    expect(typeof dummy).toBe('function'); // hoisted to top of block

    function dummy() {}

    expect(typeof dummy).toBe('function');
  }

  expect(typeof dummy).toBe('function');
});

test('block level function scope in strict mode', () => {
  'use strict';

  expect.assertions(4);
  expect(typeof dummy).toBe('undefined');

  if (true) {
    expect(typeof dummy).toBe('function'); // hoisted to top of block

    function dummy() {}

    expect(typeof dummy).toBe('function');
  }

  expect(typeof dummy).toBe('undefined');
});
