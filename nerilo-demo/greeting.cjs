function greet(name) {
  if (typeof name !== 'string') throw new TypeError('name must be a string');
  return `Hello, ${name.trim()}!`;
}
module.exports = { greet };
