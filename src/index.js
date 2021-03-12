module.exports = function reverse (n) {
    let str = n.toString();
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        str1 += str[str.length - (i + 1)];
    }
    return parseInt(str1);
}
