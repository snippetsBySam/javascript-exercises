const removeFromArray = function(originalArray, ...stringsToRemove) {
    let removedArray = originalArray;
    let valuesToRemove = Array.from(stringsToRemove);
    for (let i = 0; i < valuesToRemove.length; i++) {
        if (removedArray.indexOf(valuesToRemove[i]) == -1) {
            continue;
        }
        removedArray.splice(removedArray.indexOf(valuesToRemove[i]), 1);
    }
    return removedArray;
}

module.exports = removeFromArray
