test('arrow functions and this, arguments', () => {
  let returnThis = () => this;
  let returnArguments = () => arguments;

  expect(returnThis()).toBe(this);
  expect(returnArguments()).toBe(arguments);
});

test('arrow function names', () => {
  let sum = (a, b) => a + b;

  expect(sum.name).toBe('sum');
});
