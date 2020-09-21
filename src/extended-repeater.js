const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let res = '',
        additionStr,
        mainStr, addStr = String(options.addition);
    str = String(str);
    addStr = (addStr !== 'undefined') ? addStr : false;

    function buildString(value, times = 0, separator = '+') {
        let result = '';
        for (let i = 0; i < times; i++) {
            result += value + separator;
        }
        return result.slice(0, (result.length - separator.length));
    };
    if (str) {
        let rep = (options.repeatTimes) ? options.repeatTimes : 1;
        let sep = (options.separator) ? options.separator : "+";
        mainStr = buildString(String(str), rep, sep);
        if (addStr && options.additionRepeatTimes != 0) {
            rep = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
            sep = (options.additionSeparator) ? options.additionSeparator : "|";
            additionStr = buildString(String(addStr), rep, sep);
        }
        if (additionStr) {
            let re = new RegExp(str, 'g');
            res = mainStr.split(str).join(str + additionStr);
        } else res = mainStr;
    }
    return res;
};