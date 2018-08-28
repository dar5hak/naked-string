#!/usr/bin/env node

const assert = require('assert');
const naked = require('.');

assert.strictEqual(naked('plain'), 'plain');
assert.strictEqual(naked('Pokémon'), 'pokemon');
assert.strictEqual(naked('Hakuna Matata'), 'hakunamatata');

console.log('All tests passed.');
