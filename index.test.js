const { happy, yell } = require('./index');

test('smils', () => {
  expect(happy()).toBe(":)");
});

test('yell', () => {
  expect(yell()).toBe(":O");
});
