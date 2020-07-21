test('basic usage', () => {
  let map = new Map();
  map.set('name', 'Eduardo');
  map.set('age', 56);

  expect(map.size).toBe(2);
  expect(map.get('name')).toBe('Eduardo');
  expect(map.has('age')).toBeTruthy();
  expect(map.get('age')).toBe(56);

  map.delete('age');
  expect(map.has('age')).toBeFalsy();
  expect(map.get('age')).toBeUndefined();

  map.clear();
  expect(map.size).toBe(0);
});

test('initialization with two-dimensional array', () => {
  let map = new Map([
    ['name', 'Eduardo'],
    ['age', 56],
  ]);

  expect(map.size).toBe(2);
  expect(map.get('name')).toBe('Eduardo');
  expect(map.get('age')).toBe(56);
});

test('special key types for maps', () => {
  let obj1 = {};
  let obj2 = {};
  let map = new Map([
    ['5', 'value1'],
    [5, 'value2'],
    [obj1, 'value3'],
    [obj2, 'value4'],
  ]);

  expect(map.size).toBe(4);
  expect(map.get('5')).toBe('value1');
  expect(map.get(5)).toBe('value2');
  expect(map.get(obj1)).toBe('value3');
  expect(map.get(obj2)).toBe('value4');
});

test('special key types for objects', () => {
  let map = Object.create(null);
  let obj1 = {};
  let obj2 = {};
  map['5'] = 'value1';
  map[5] = 'value2';
  map[obj1] = 'value3';
  map[obj2] = 'value4';

  expect(map).toEqual({
    '5': 'value2',
    '[object Object]': 'value4',
  });
});

test('forEach() method', () => {
  let map = new Map([
    ['name', 'Eduardo'],
    ['age', 56],
  ]);

  expect.assertions(4);

  map.forEach((value, key, m) => {
    expect(map.get(key)).toBe(value);
    expect(m).toBe(map);
  });
});

test('weak map basics', () => {
  let map = new WeakMap();
  let person = {
    name: 'Eduardo',
    age: 56,
  };

  map.set(person, {
    isUser: true,
    isAdmin: false,
  });

  expect(map.has(person)).toBeTruthy();
  expect(map.get(person)).toEqual({
    isUser: true,
    isAdmin: false,
  });
  expect(() => {
    map.set(5, 'some information');
  }).toThrow(TypeError);
});
