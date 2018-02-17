#!/usr/bin/env node

const assert = require('assert');
const naked = require('.');

assert.equal(naked('plain'), 'plain');
assert.equal(naked('Pokémon'), 'pokemon');
assert.equal(naked('Hakuna Matata'), 'hakunamatata');

console.log('All tests passed.');
