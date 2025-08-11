#!/usr/bin/env node

import assert from 'node:assert';
import naked from './index.js';

assert.strictEqual(naked('plain'), 'plain');
assert.strictEqual(naked('Pokémon'), 'pokemon');
assert.strictEqual(naked('Hakuna Matata'), 'hakunamatata');

console.log('All tests passed.');
