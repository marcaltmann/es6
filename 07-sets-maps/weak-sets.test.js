test('weak set basics', () => {
  let set = new WeakSet();
  let person = {
    name: 'Alice',
    surname: 'Ryan',
  };

  set.add(person);
  expect(set.has(person)).toBeTruthy();

  set.delete(person);
  expect(set.has(person)).toBeFalsy();

  /* Reference should also be deleted from set, but this cannot be tested
     anymore?? */
  person = null;
});

test('weak set differences', () => {
  let set = new WeakSet();

  expect(set.size).toBeUndefined();
  expect(set.forEach).toBeUndefined();

  expect(() => {
    set.add(5);
  }).toThrow(TypeError);

  expect(() => {
    let arr = [...set];
  }).toThrow(TypeError);
});
