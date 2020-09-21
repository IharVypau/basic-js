const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let result;
    if (!date) return 'Unable to determine the time of year!';
    checkDate = function(date) {
        if (date != null && date.getMonth() != 'undefined' && Object.keys(date).length == 0) return true;
        throw new Error('Not implemented');
    };
    let month = +date.getMonth();
    switch (checkDate(date)) {
        case 12:
        case 1:
        case month >= 2 && month <= 4:
            result = 'spring';
            break;
        case month >= 8 && month <= 10:
            result = 'autumn';
            break;
        case month >= 5 && month <= 7:
            result = 'summer';
            break;
        case month == 11 || month == 0 || month == 1:
            result = 'winter';
            break;
    }

    return result;
};