const diacriticless = require('diacriticless');
const limitAlphanumeric = require('limit-alphanumeric');

module.exports = str => limitAlphanumeric(diacriticless(str.toString()).toLowerCase());
