test('duplicate object literal properties are possible', () => {
  let obj = {
    name: 'Marc',
    name: 'Marcel',
  };

  expect(obj).toEqual({
    name: 'Marcel',
  });
});

test('enumeration order is defined', () => {
  let obj = {
    a: 5,
    4: 121,
    g: 10,
    2: 100,
    1: 50,
    h: 3,
    3: 40,
  };

  obj.d = 60;

  let propertyNames = Object.getOwnPropertyNames(obj).join('');
  expect(propertyNames).toBe('1234aghd');
});
