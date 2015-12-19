const diacriticless = require('diacriticless');

function alphanumericize(string) {
	return string.replace(/[^a-z0-9]/g, '');
}

module.exports = function nakedString(string) {
	return alphanumericize(diacriticless(string.toString()).toLowerCase());
};

