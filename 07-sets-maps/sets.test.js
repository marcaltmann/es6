test('basic usage', () => {
  let numbers = new Set([5, 3, 6, 9, 4, 5, 5, 1]);

  numbers.delete(9);
  numbers.add(-1);
  numbers.add(5);

  expect(numbers.size).toBe(6);
  expect(numbers.has(1)).toBeTruthy();
  expect([...numbers]).toEqual([5, 3, 6, 4, 1, -1]);

  numbers.clear();

  expect(numbers.size).toBe(0);
});

test('forEach() method', () => {
  let set = new Set([1, 2, 3]);

  expect.assertions(6);

  set.forEach((arg1, arg2, s) => {
    expect(arg1).toBe(arg2);
    expect(s).toBe(set);
  });
});

test('weak set basics', () => {
  let set = new WeakSet();

  expect(() => {
    set.add(5);
  }).toThrow(TypeError);

  expect(set.size).toBeUndefined();
})
