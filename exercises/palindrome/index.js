// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false




// function palindrome(str) {
//     const reversed = str.split('').reverse().join('') // reverse --> abc = cba
//     if (reversed === str) return true                 // if reversed is the same as string arg
//     return false
// }




// Favorite *********************
function palindrome(str) {
    const reversed = str.split('').reverse().join('')  // str reversed
    return str === reversed                            // same as: if else
}





// NOT a good way and I hate it. 
// every does a boolean check on each element in an array 
// arr.every((val) => val >5)
// if any are false then the entire thing is false, needs all true of true.
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]
//     })
// }







console.log(palindrome(' aba'))







module.exports = palindrome;
