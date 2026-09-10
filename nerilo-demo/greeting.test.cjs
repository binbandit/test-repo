const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./greeting.cjs');
test('greets a named person', () => assert.equal(greet('Ada'), 'Hi, Ada'));
test('rejects non-string names', () => assert.throws(() => greet(42), TypeError));
