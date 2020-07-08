test('multiline usage', () => {
  let str1 = `Hello
world!`;

  let str2 = `Hello\nworld!`;

  expect(str1).toBe(str2);
});

test('subtitutions', () => {
  let count = 5;
  let str = `This house has ${count} doors.`;

  expect(str).toBe('This house has 5 doors.');
});

test('String.raw tag', () => {
  let str1 = `Hello\nworld!`;
  let str2 = String.raw`Hello\nworld!`;

  expect(str1).toBe('Hello\nworld!');
  expect(str2).toBe('Hello\\nworld!');
});

test('own tag', () => {
  function capitalizeRaw(literals, ...substitutions) {
    let wholeString = '';

    substitutions.forEach((s, index) => {
      wholeString += literals[index];
      wholeString += literals.raw[index];
      wholeString += s;
    });

    wholeString += literals[literals.length - 1];
    wholeString += literals.raw[literals.length - 1];

    return wholeString.toUpperCase();
  }

  let count = 5;
  let str = capitalizeRaw`This house\nhas ${count} doors.`;

  expect(str).toBe('THIS HOUSE\nHAS THIS HOUSE\\NHAS 5 DOORS. DOORS.');
});
