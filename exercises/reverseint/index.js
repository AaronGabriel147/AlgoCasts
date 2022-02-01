// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9





// reverse it by arr, reverse method, then join. same as I did for string, but make it an in again


// I failed the negative numbers. - shows up at the end...
// function reverseInt(n) {
//     console.log('____________________BELOW_______________________')
//     // console.log(typeof parseInt(reverse))
//     const reverse = n.toString().split('').reverse().join('')
//     console.log(reverse)
//     return parseInt(reverse)
// }

// PASSES ALL!
// Oh it is so ugly but I did it all on my own and had fun!!!
// function reverseInt(n) {
//     if (n === 0) return 0
//     if (n > 0) { // if positive, returns positive
//         const reverse = n.toString().split('').reverse().join('')
//         return parseInt(reverse)
//     } else { // is negative, returns negative
//         const reverse = n.toString().split('').reverse().join('')
//         const parsed = parseInt(reverse)
//         return -parsed
//     }
// }






// Math.sign(555) // returns 1
// Math.sign(-555) // returns -1


function reverseInt(n) {

    const reversed = n.toString().split('').reverse().join('')
    // const parsed = parseInt(reversed)
    // if (Math.sign(n) === 1) {
    //     return parsed
    // } return -parsed // * -1

    return parseInt(reversed) * Math.sign(n) // tricky method/math * -1 turns negative and * 1 turns positive
}




console.log(reverseInt(-123))

module.exports = reverseInt;






