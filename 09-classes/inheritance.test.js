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
