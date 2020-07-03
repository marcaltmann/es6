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

test('destructured parameters for function options', () => {
  function doSomething(id, task, {
    // optional arguments start here
    terminal = 1,
    country = 'de',
    date = new Date()
  } = {}) {
    expect(id).toBe(0);
    expect(task).toBe('new');
    expect(terminal).toBe(1);
    expect(country).toBe('zh');
    expect(date).not.toBeUndefined();
  }

  doSomething(0, 'new', {
    country: 'zh',
  });
});
