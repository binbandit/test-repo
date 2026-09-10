function greet(name) {
  if (name === null) return 'Hello, friend!';
  if (typeof name !== 'string') throw new TypeError('name must be a string');
  const trimmedName = name.trim();
  if (trimmedName === '') return 'Hello, friend!';
  return `Hello, ${trimmedName}!`;
}
module.exports = { greet };
