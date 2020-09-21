const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let result = [];
    if (arr && arr.length > 0) {
        for (let i = 0, j = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    i++;
                    j = 0;
                    break;
                case '--discard-prev':
                    if (j) result.pop();
                    else j = 1;
                    break;
                case '--double-next':
                    if (i < arr.length - 1) result.push(arr[i + 1]);
                    break;
                case '--double-prev':
                    if (i != 0 && j) result.push(arr[i - 1]);
                    else j = 1;
                    break;
                default:
                    {
                        j++;
                        result.push(arr[i]);
                    }
            }
        };

    } else if (!arr) {
        throw new Error('Not array');
    }

    return result;
};