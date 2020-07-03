test('property initializer shorthand', () => {
  let a = 10, b = 20;

  let obj = {
    a,
    b,
  };

  expect(obj).toEqual({
    a: 10,
    b: 20,
  });
});

test('concise method syntax', () => {
  expect.assertions(1);

  let obj = {
    doSomething() {
      expect(true).toBeTruthy();
    },
  };

  obj.doSomething();
});

test('computed property names', () => {
  let key1 = 'first key', key2 = 'secondKey';

  let obj = {
    [key1]: 5,
    [key2]: 10,
  };

  expect(obj).toEqual({
    'first key': 5,
    secondKey: 10,
  });
});
