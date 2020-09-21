const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = [];
    if (!Array.isArray(members)) return false;
    members = members.filter((v) => {
        if (typeof v != 'string') {
            return false;
        }
        return true;
    });
    result = members.map((v) => {
        return v.replace(/\s+/g, '')[0].toUpperCase();
    });
    result = result.sort().join('');
    return result;
};