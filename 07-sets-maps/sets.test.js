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
