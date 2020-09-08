const { happy } = require('./index');

test('smils', () => {
  expect(happy()).toBe(":)");
});
