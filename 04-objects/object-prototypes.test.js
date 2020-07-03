test('changing the prototype of an object', () => {
  let person = {
    saySomething() {
      return 'Hello';
    },
  };

  let marc = Object.create(person);

  expect(marc.saySomething()).toBe('Hello');

  let animal = {
    saySomething() {
      return 'Woof';
    },
  };

  Object.setPrototypeOf(marc, animal);

  expect(marc.saySomething()).toBe('Woof');
});

test('using super', () => {
  let person = {
    sayName() {
      return 'My name is ';
    },
  };

  let marc = {
    sayName() {
      return super.sayName() + 'Marc';
    },
  };

  Object.setPrototypeOf(marc, person);

  expect(marc.sayName()).toBe('My name is Marc');
});
