test('Symbol.iterator property', () => {
  let arr = [1, 2, 3];
  let gen = function *() {
    yield 1;
  };
  let iterator = gen();

  expect(typeof arr[Symbol.iterator]).toBe('function');
  expect(typeof iterator[Symbol.iterator]).toBe('function');
});

test('for of loop', () => {
  let arr = [1, 2, 3];

  let result = new String();
  for (el of arr) {
    result += el;
  }

  expect(result).toBe('123');
});

test('default/values iterator', () => {
  let arr = [1, 2, 3];
  let iterator = arr[Symbol.iterator]();

  expect(iterator.next().value).toBe(1);
  expect(iterator.next().value).toBe(2);
  expect(iterator.next().value).toBe(3);
});

test('keys iterator', () => {
  let arr = ['a', 'b', 'c'];
  let iterator = arr.keys();

  expect(iterator.next().value).toBe(0);
  expect(iterator.next().value).toBe(1);
  expect(iterator.next().value).toBe(2);
});

test('entries iterator', () => {
  let arr = ['a', 'b', 'c'];
  let iterator = arr.entries();

  expect(iterator.next().value).toEqual([0, 'a']);
  expect(iterator.next().value).toEqual([1, 'b']);
  expect(iterator.next().value).toEqual([2, 'c']);
});

test('custom iterator', () => {
  let Person = function(givenName, middleName, surname) {
    this.givenName = givenName;
    this.middleName = middleName;
    this.surname = surname;
  }
  Person.prototype = {
    getName() {
      return `${this.givenName} ${this.middleName} ${this.surname}`;
    },
    *[Symbol.iterator]() {
      yield this.givenName;
      yield this.middleName;
      yield this.surname;
    },
  };

  let thornhill = new Person('Roger', 'O.', 'Thornhill');
  let name = [...thornhill].join(' ');

  expect(name).toBe('Roger O. Thornhill');
});

test('iterating maps', () => {
  let person = new Map();
  person.set('Given name', 'Roger');
  person.set('Surname', 'Thornhill');

  let attributes = new Array();
  for ([attr, value] of person) {  // The default iterator for maps is entries()
    attributes.push(`${attr}: ${value}`);
  }

  expect(attributes).toEqual([
    'Given name: Roger',
    'Surname: Thornhill',
  ]);
});

test('iterating strings', () => {
  let name = 'Roger O. Thornhill';
  let num = 0;

  for (char of name) {
    if (char.toLowerCase() === 'o') {
      num += 1;
    }
  }

  expect(num).toBe(3);
});
