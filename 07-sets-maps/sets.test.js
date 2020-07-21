test('basic usage', () => {
  let set = new Set();

  set.add(1)
     .add(2)
     .add(3)
     .add(3)
     .add(3)
     .delete(2);

  expect(set.size).toBe(2);
  expect(set.has(1)).toBeTruthy();
  expect(set.has(2)).toBeFalsy();

  set.clear();
  expect(set.size).toBe(0);
});

test('forEach() method', () => {
  let set = new Set([1, 2, 3]);

  expect.assertions(6);

  set.forEach((arg1, arg2, s) => {
    expect(arg1).toBe(arg2);
    expect(s).toBe(set);
  });
});

test('converting from and to arrays', () => {
  let set = new Set([5, 3, 6, 9, 4, 5, 5, 1]);
  let arr = [...set];

  expect(arr).toEqual([5, 3, 6, 9, 4, 1]);
});

test('add method only accepts one argument', () => {
  let set = new Set();

  set.add(1);
  set.add(2, 3, 4);
  set.add([5, 6, 7]);

  expect([...set]).toEqual([1, 2, [5, 6, 7]]);
});
