const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
    let result = 0;
    cats.reduce((p, v) => {
        v.forEach(el => {
            if (el === '^^') result++;
        });
    }, result);
    return result;
};