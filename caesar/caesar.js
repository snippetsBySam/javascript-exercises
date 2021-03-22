const caesar = function(string, key) {
    // this function is just a fancy way of doing % so that it works with negative numbers
    // see this link for details:
    // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
    const mod = (n, m) => (n % m + m) % m;
    let cyphertext = "";
    for (let letter of string) {
        // get ascii code of current character
        letterAscii = letter.charCodeAt(0);
        // if upper case
        if (letterAscii >= 65 && letterAscii <= 90) {
            cypherAscii = mod((letterAscii - 65 + (key)), 26) + 65;
            cyphertext += String.fromCharCode(cypherAscii);
        }
        // if lower case
        else if (letterAscii >= 97 && letterAscii <= 122) {
            cypherAscii = mod((letterAscii - 97 + (key)), 26) + 97;
            cyphertext += String.fromCharCode(cypherAscii);
        }
        // all other characters
        else {
            cyphertext += letter;
        }
    }
    return cyphertext;
}

module.exports = caesar
