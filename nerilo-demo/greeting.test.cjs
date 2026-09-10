const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./greeting.cjs');
test('greets a named person', () => assert.equal(greet('Ada'), 'Hi, Ada'));
