const { concatStrings } = require('.');

test('concats numbers', () => {
  const result = concatStrings(1, 2);
  expect(result).toBe('12');
});

test('concats strings', () => {
  const result = concatStrings('Alex', 'V');
  expect(result).toBe('AlexV');
});

test('concats strings and numbers', () => {
  const result = concatStrings('Alex', 11);
  expect(result).toBe('Alex11');
});
