// 1ère solution
// module.exports = reverse = (str) => str.split("").reverse().join("");


// 2ème solution
module.exports = reverse = (str) => {
    let reversedStr = "";
    // for (const character of str) {
    //     reversedStr = character + reversedStr
    // }
    for (let i = str.length - 1; i >= 0 ; i--) {
          reversedStr += str[i]     
    }
    return reversedStr;
}

