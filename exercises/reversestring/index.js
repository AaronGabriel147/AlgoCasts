// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {

//     const arr = str.split('') // split with empty str turns the str into an arr with every element as a letter
//     arr.reverse()             // use reverse method on arr
//     return arr.join('')       // turn arr back into a str and join all elements

// }


// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }



// function reverse(str) {
//     let reversed = ''

//     for (let character of str) {
//         console.log(character)
//         reversed = character + reversed
//     }
//     return reversed
// }


// I do not like this one!!! 
// function reverse(str) {
//     return str.split('').reduce((reverse, char) => char + reverse, '')
// }


// reverse('abc')






module.exports = reverse;
