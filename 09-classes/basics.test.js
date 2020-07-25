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

test('accessor properties, computed names and generators', () => {
  // All these can be used with plain objects as well.
  class Person {
    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }

    *[Symbol.iterator]() {
      yield this._name;
    }
  }

  let p = new Person();
  p.name = 'Roger O. Thornhill';

  expect(p.name).toBe('Roger O. Thornhill');
  let descriptor = Object.getOwnPropertyDescriptor(Person.prototype, 'name');
  expect(descriptor.value).toBeUndefined();
  expect(typeof descriptor.get).toBe('function');
  expect(typeof descriptor.set).toBe('function');

  let elements = [...p];
  expect(elements.length).toBe(1);
  expect(elements[0]).toBe('Roger O. Thornhill');
});

test('static members', () => {
  /* Would normally be set like:
     Person.getAllNames = function() {...} */
  class Person {
    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }

    static getAllNames() {
      return ['Roger Thornhill', 'Eve Kendall', 'Lester Townsend'];
    }

    static get extras() {
      return ['Auctioneer', 'Leonard'];
    }
  }

  expect(Person.getAllNames()).toEqual(
    ['Roger Thornhill', 'Eve Kendall', 'Lester Townsend']
  );
  expect(Person.extras).toEqual(['Auctioneer', 'Leonard']);
});
