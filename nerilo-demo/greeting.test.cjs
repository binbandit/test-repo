const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./greeting.cjs');
test('rejects non-string names', () => assert.throws(() => greet(42), TypeError));
test('greets a null name as a friend', () => assert.equal(greet(null), 'Hello, friend!'));
test('greets a whitespace-only name as a friend', () => assert.equal(greet(' \t\n '), 'Hello, friend!'));
test('greets Ada', () => assert.equal(greet('Ada'), 'Hello, Ada!'));
test('greets Grace', () => assert.equal(greet('Grace'), 'Hello, Grace!'));
test('trims whitespace from a name', () => assert.equal(greet('  Ada  '), 'Hello, Ada!'));
