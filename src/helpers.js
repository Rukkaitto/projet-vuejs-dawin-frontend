const remove = require('diacritics').remove

exports.normalize = (str) => {
    return remove(str).toLowerCase();
}
