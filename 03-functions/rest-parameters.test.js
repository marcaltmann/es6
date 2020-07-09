test('rest parameter', () => {
  function add(a, ...rest) {
    let sum = a;

    rest.forEach(s => {
      sum += s;
    });

    return sum;
  }

  expect(add.length).toBe(1);
  expect(add(3)).toBe(3);
  expect(add(4,5)).toBe(9);
  expect(add(1, 2, 3, 4, 5)).toBe(15);
});

test('also work with the Function constructor', () => {
  let pickFirst = new Function('...args', 'return args[0];');

  expect(pickFirst(3, 2, 1)).toBe(3);
});
