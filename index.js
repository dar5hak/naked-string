const diacriticless = require('diacriticless');
const limitAlphanumeric = require('limit-alphanumeric');

module.exports = function nakedString(string) {
	return limitAlphanumeric(diacriticless(string.toString()).toLowerCase());
};
