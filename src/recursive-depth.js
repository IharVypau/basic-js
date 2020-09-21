const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, currDepth = 1, maxDepth = 1) {
        if (arr.every(val => !Array.isArray(val))) {
            if (maxDepth < currDepth) maxDepth = currDepth;
        } else {
            currDepth++;
            let tmp = arr.reduce((prev, val) => prev.concat(val), []);
            maxDepth = this.calculateDepth(tmp, currDepth, maxDepth);
        }
        currDepth--;
        return maxDepth;
    };
};