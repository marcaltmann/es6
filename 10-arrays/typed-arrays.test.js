test('simple typed array', () => {
  let arr = new Int8Array([-2, 10, 100]);

  expect(arr[0]).toBe(-2);
  expect(arr[1]).toBe(10);
  expect(arr[2]).toBe(100);
  expect(arr.length).toBe(3);
  expect(Int8Array.BYTES_PER_ELEMENT).toBe(1);
  expect(arr.byteLength).toBe(3);
  expect(arr.byteOffset).toBe(0);
  expect(arr.toString()).toBe('-2,10,100');
});

test('some other types', () => {
  let arr1 = Int32Array.of(-1000, 0, 20000);
  let arr2 = Float64Array.of(-2, 3.14, 2.00009);

  expect(arr1.length).toBe(3);
  expect(Int32Array.BYTES_PER_ELEMENT).toBe(4);
  expect(arr1.byteLength).toBe(12);
  expect(arr1.toString()).toBe('-1000,0,20000');

  expect(arr2.length).toBe(3);
  expect(Float64Array.BYTES_PER_ELEMENT).toBe(8);
  expect(arr2.byteLength).toBe(24);
  expect(arr2.toString()).toBe('-2,3.14,2.00009');
});

test('type coercion', () => {
  let arr = new Uint8Array([-5, 1, 300, 'a', {}, 'hallo']);

  // Does not throw as described in the book, but coerces values.
  expect(arr.toString()).toBe('251,1,44,0,0,0');
});

test('new methods', () => {
  let arr = Int8Array.of(1, 2, 3, 4, 5, 6);

  let sub = arr.subarray(1, 3);
  expect(sub.length).toBe(2);
  expect(sub instanceof Int8Array).toBeTruthy();
  expect(sub.toString()).toBe('2,3');

  let ins = Int32Array.of(0, -1);
  arr.set(ins, 1);
  expect(arr.toString()).toBe('1,0,-1,4,5,6');
});
