import diacriticless from 'diacriticless';
import limitAlphanumeric from 'limit-alphanumeric';

const nakedString = string_ => limitAlphanumeric(diacriticless(string_.toString()).toLowerCase());

export default nakedString;
