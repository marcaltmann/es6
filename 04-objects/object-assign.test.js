test('works flatly', () => {
  let source1 = {
    a: 10,
    b: [1, 2, 3],
  };
  let source2 = {
    c: 'hi!',
  };
  let target = {
    a: 5,
  };

  Object.assign(target, source1, source2);

  expect(target).toEqual({
    a: 10,
    b: [1, 2, 3],
    c: 'hi!',
  });
  expect(target.b).toBe(source1.b);
});

test('can clone objects', () => {
  let a = {
    name: 'Harrison Ford',
    age: 56,
  };

  let b = Object.assign({}, a);

  expect(b).toEqual({
    name: 'Harrison Ford',
    age: 56,
  });
});

test('converts accessor to data properties', () => {
  let source = {
    get number() {
      return 5;
    },
  };
  let target = Object.assign({}, source);

  let targetDescriptor = Object.getOwnPropertyDescriptor(target, 'number');
  expect(targetDescriptor.value).toBe(5);
  expect(targetDescriptor.get).toBeUndefined();
});
