test('a simple class', () => {
  class Person {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }

  let p1 = new Person('Roger O. Thornton');

  expect(p1.getName()).toBe('Roger O. Thornton');
  expect(p1 instanceof Person).toBeTruthy();
  expect(p1 instanceof Object).toBeTruthy();
  expect(Person.name).toBe('Person');
  expect(typeof Person).toBe('function');
  expect(typeof Person.prototype.getName).toBe('function');
});

test('class expressions', () => {
  let Person = class {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  };

  let p1 = new Person('Roger O. Thornton');

  expect(p1.getName()).toBe('Roger O. Thornton');
  expect(Person.name).toBe('Person');  // Different from the book.
});

test('singleton objects', () => {
  let planet = new class {
    constructor(name) {
      this.name = name
    }

    getName() {
      return this.name;
    }
  }('Earth');

  expect(planet.getName()).toBe('Earth');
});
