const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let result;
    let typeAct = typeof sampleActivity;
    if (typeAct !== 'string' || !isFinite(parseFloat(sampleActivity))) return false;
    let remainActivity = parseFloat(sampleActivity);
    if (0 >= remainActivity || remainActivity > MODERN_ACTIVITY) return false;
    result = Math.ceil(Math.log(MODERN_ACTIVITY / remainActivity) / (Math.log(2).toFixed(3) / HALF_LIFE_PERIOD));
    return result;
};