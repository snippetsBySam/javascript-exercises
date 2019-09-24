const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    let cumulativeSum = 0;
    let smallerNum = Math.min(num1, num2);
    let largerNum = Math.max(num1, num2);
    for (let i = smallerNum; i <= largerNum; i++) {
        cumulativeSum += i;
    }
    return cumulativeSum;
}

module.exports = sumAll
