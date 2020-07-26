test('using extends for inheritance', () => {
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    // This member will get called with super().
    getArea() {
      return this.width * this.height;
    }

    // This member will be inherited.
    getDiagonal() {
      return Math.sqrt(
        (this.width * this.width) + (this.height * this.height)
      );
    }

    // This member will be shadowed.
    isSquare() {
      return this.width === this.height;
    }

    static PI = 3.14;  // Is this really ES6?

    static getPi() {
      return Rectangle.PI;
    }
  }

  class Square extends Rectangle {
    constructor(length) {
      super(length, length);
    }

    getArea() {
      return super.getArea();
    }

    isSquare() {
      return true;
    }
  }

  let s1 = new Square(10);

  expect(s1.getArea()).toBe(100);
  expect(s1.getDiagonal()).toBeCloseTo(14.14);
  expect(s1.isSquare()).toBe(true);
  expect(Square.PI).toBe(3.14);
  expect(Square.getPi()).toBe(3.14);
});

test('inheriting from built-in types', () => {
  class NewArray extends Array {
  }

  let arr = new NewArray();
  arr.push(5);
  arr.push(6);
  arr.push(7);

  let arr2 = arr.concat(8);

  expect(arr).toEqual([5, 6, 7]);
  expect(arr2).toEqual([5, 6, 7, 8]);
  expect(arr).toBeInstanceOf(NewArray);
  expect(arr2).toBeInstanceOf(NewArray);
});

test('simulating abstract classes', () => {
  class Being {
    constructor() {
      if (new.target === Being) {
        throw new Error('Being cannot be instantiated.');
      }
    }
  }

  class Person extends Being {
    constructor(size) {
      super();
      this.size = size;
    }

    getSize() {
      return this.size;
    }
  }

  let p = new Person(1.73);
  expect(p.getSize()).toBe(1.73);
  expect(p).toBeInstanceOf(Being);

  expect(() => {
    let b = new Being();
  }).toThrow('Being cannot be instantiated.');
});
