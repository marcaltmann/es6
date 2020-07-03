test('complex object and array destructuring', () => {
  let obj = {
    size: 567,
    dimensions: {
      x: 300,
      y: 200,
    },
    thumbnails: [
      {
        id: 'small',
        url: 'small.jpg',
      },
      {
        id: 'large',
        url: 'large.jpg',
      },
    ],
  };

  let { dimensions: { x, y }, thumbnails: [ firstThumbnail ] } = obj;

  expect(x).toBe(300);
  expect(y).toBe(200);

  expect(firstThumbnail).toEqual({
    id: 'small',
    url: 'small.jpg',
  });
});
