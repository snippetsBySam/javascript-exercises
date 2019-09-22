const reverseString = function(stringToReverse) {
    let reversedString = "";
    let stringPos = stringToReverse.length;
    for (let i = stringPos; i > 0; i-- ) {
        reversedString += stringToReverse[i-1];
    }
    return reversedString;

}

module.exports = reverseString
