test('a simple pass-through proxy', () => {
  let target = {};
  let proxy = new Proxy(target, {});

  proxy.name = 'proxy';
  expect(proxy.name).toBe('proxy');
  expect(target.name).toBe('proxy');

  target.name = 'target';
  expect(proxy.name).toBe('target');
  expect(target.name).toBe('target');
});

test('array with checks for value type', () => {
  let target = {
    name: 'target',
  };

  let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {

      // Ignore existing properties so as not to affect them.
      if (!trapTarget.hasOwnProperty(key)) {
        if (isNaN(value)) {
          throw new TypeError('Property must be a number.');
        }
      }

      // Add the property.
      return Reflect.set(trapTarget, key, value, receiver);
    },
  });

  // Adding a new property.
  proxy.count = 1;
  expect(proxy.count).toBe(1);
  expect(target.count).toBe(1);

  // You can assign to name because it exists on target already.
  proxy.name = 'proxy';
  expect(proxy.name).toBe('proxy');
  expect(target.name).toBe('proxy');

  // Throws an error.
  expect(() => {
    proxy.anotherName = 'proxy';
  }).toThrow('Property must be a number.');
});
