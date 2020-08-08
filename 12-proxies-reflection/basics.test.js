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
