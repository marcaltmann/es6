test('basic usage', () => {
  let id = Symbol('id');
  let item = {};
  item[id] = '356A';

  expect(typeof id).toBe('symbol');
  expect(id.toString()).toBe('Symbol(id)');
  expect(item[id]).toBe('356A');
});

test('must be created without new', () => {
  expect(() => {
    let id = new Symbol();
  }).toThrow(TypeError);
});

test('using the global registry', () => {
  let lastName = Symbol.for('lastname');
  let retrieved = Symbol.for('lastname');

  expect(typeof retrieved).toBe('symbol');
  expect(retrieved).toBe(lastName);
  expect(Symbol.keyFor(retrieved)).toBe('lastname');
});

test('getOwnPropertySymbols()', () => {
  let uid = Symbol('uid');
  let item = {
    [uid]: 1,
  };

  let properties = Object.getOwnPropertySymbols(item);
  expect(properties.length).toBe(1);
  expect(properties[0]).toBe(uid);
});

test('usage with Object.defineProperty()', () => {
  let uid = Symbol('uid');
  let article = {
    [uid]: 1,
  };

  Object.defineProperty(article, uid, { writable: false });
  article[uid] = 2;

  expect(article[uid]).toBe(1);
});

test('usage with Object.defineProperties()', () => {
  let uid = Symbol('uid');
  let article = {};

  Object.defineProperties(article, {
    [uid]: {
      value: 1,
      writable: false,
    },
  });

  article[uid] = 2;

  expect(article[uid]).toBe(1);
});
