test('creating a revocable proxy', () => {
  let target = {};
  let { proxy, revoke } = Proxy.revocable(target, {});

  proxy.name = 'proxy';
  expect(proxy.name).toBe('proxy');

  revoke();

  expect(() => {
    proxy.name = 'target';
  }).toThrow(TypeError);
  expect(() => {
    proxy.name;
  }).toThrow(TypeError);
});

test('a proxy as a prototype', () => {
  let target = {};
  let thing = Object.create(new Proxy(target, {
    get(trapTarget, key, receiver) {
      throw new ReferenceError(`${key} doesn't exist`);
    }
  }));

  thing.name = 'thing';

  expect(thing.name).toBe('thing');
  expect(() => {
    thing.unknown;
  }).toThrow('unknown doesn\'t exist');
});
