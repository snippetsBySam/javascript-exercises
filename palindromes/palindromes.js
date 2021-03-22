const palindromes = function(string) {
    filteredString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    reversedString = filteredString.split("").reverse().join("");
    return filteredString === reversedString;

}

module.exports = palindromes
