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

test('rest also works with the Function constructor', () => {
  let pickFirst = new Function('...args', 'return args[0];');

  expect(pickFirst(3, 2, 1)).toBe(3);
});

test('spread operator', () => {
  let numbers = [5, -3, 12, 200];

  let max1 = Math.max.apply(Math, numbers);
  let max2 = Math.max(...numbers);
  let max3 = Math.max(...numbers, 250);

  expect(max1).toBe(200);
  expect(max2).toBe(200);
  expect(max3).toBe(250);
});
