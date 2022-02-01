// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0





// Long iterative way. Will attempt nested loop now.
// function vowels(str) {

//     let count = 0

//     for (let vowel of str) {
//         if (vowel === 'a' ||
//             vowel === 'e' ||
//             vowel === 'i' ||
//             vowel === 'o' ||
//             vowel === 'u') {
//             count += 1
//         }
//     }
//     return count
// }


// =====================================

// console.log('i =', i)
// console.log('j =', j)
// console.log('vowels[j] =', vowels[j])
// console.log('str[i] =', str[i])
// console.log('--------------')



// for each iteration we take one character from str   = str[i]
// and compare it to every char in vowels              = vowels[j]

// function vowels(str) {

//     let count = 0

//     for (let i = 0; i < str.length; i++) {

//         let vowels = ['a', 'e', 'i', 'o', 'u']

//         for (let j = 0; j < vowels.length; j++) {

//             if (str[i] === vowels[j]) count += 1
//         }

//     }
//     return count
// }



// ================================


// .includes solution

// function vowels(str) {
//     let lowStr = str.toLowerCase()
//     let count = 0
//     let vowelsChecker = ['a', 'e', 'i', 'o', 'u']

//     for (let i = 0; i < lowStr.length; i++) {
//         if (vowelsChecker.includes(lowStr[i])) {
//             count++
//         }
//     }
//     return count
// }



// =================================

// regex solution
// /[aeiou]/ looking to match these characters 
// g looks for more and 1 match
// i stand for case insensitivity 
// .match returns an array of all matches found, if no match, returns null


// function vowels(str) {

//     const matches = str.match(/[aeiou]/gi)

//     return matches ? matches.length : 0
// }



// console.log(vowels('Aeiobc'))



































module.exports = vowels;
