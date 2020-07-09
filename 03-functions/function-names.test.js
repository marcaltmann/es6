test('standard function names', () => {
  function doSomething() {}
  let doSomethingElse = function() {};
  let newName = function doSomethingDifferent() {};
  let obj = {
    func1: function() {},
    func2() {},
  };

  expect(doSomething.name).toBe('doSomething');
  expect(doSomethingElse.name).toBe('doSomethingElse');
  expect(newName.name).toBe('doSomethingDifferent');
  expect(obj.func1.name).toBe('func1');
  expect(obj.func2.name).toBe('func2');
});

test('name of a getter', () => {
  let obj = {
    get firstValue() {
      return 5;
    },
  };

  let descriptor = Object.getOwnPropertyDescriptor(obj, 'firstValue');
  expect(descriptor.get.name).toBe('get firstValue');
});

test('name of a bound function', () => {
  function sum(a, b) {
    return a + b;
  }

  let bound = sum.bind();

  expect(bound.name).toBe('bound sum');
});

test('name of a function created with the Function constructor', () => {
  let sum = new Function('a', 'b', 'return a + b;');

  expect(sum.name).toBe('anonymous');
});
