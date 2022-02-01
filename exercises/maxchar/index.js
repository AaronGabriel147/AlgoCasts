// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"




// ********************CHARACTER MAP***************************




// turn string into object, like this:
// {
//     H: 1,
//     E: 3,
//     L: 2
// }

// Preferred way
// function maxChar(str) {
//     const charObj = {}
//     for (let char of str) {
//         if (!charObj[char]) {       // if nothing exists here AKA undefined
//             charObj[char] = 1       // set it to 1
//         } else {
//             charObj[char]++        // if it does exist increment it by one
//         }
//     }
//     return charObj
// }


// SlightLy cleaner way than above.
// function maxChar(str) {
//     const charObj = {}
//     for (let char of str) {
//         if (!charObj[char]) {
//             charObj[char] = 1
//         }
//         else charObj[char]++
//     }
//     return charObj
// }

// Do not like this way.
// function maxChar(str) {
//     const charObj = {}
//     for (let char of str) {
//         charObj[char] = charObj[char] + 1 || 1
//     }
//     return charObj
// }



// -------------------------






// // Stephens.
// function maxChar(str) {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++
//         }
//         else charMap[char] = 1
//     }

//     for (let char in charMap) {
//         console.log('char -->', char)
//         console.log('charMap -->', charMap)
//         console.log('charMap[char] -->', charMap[char])

//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChar = char
//         }
//     }
//     return maxChar
// }











function maxChar(str) {                    // Find the letter with most occurrences 
    const charObj = {}                     // empty object
    let max = 0                            // highest count holder
    let maxChar = ''                       // key storage container

    for (let charKey of str) {             // for of loop to iterate over string
        if (charObj[charKey]) {            // if a key exists
            charObj[charKey]++             // add 1 to it (not + 1, must be, ++)
        }
        else charObj[charKey] = 1          // if it does not exist let it equal 1
    }

    for (let charKey in charObj) {         // for in loop is for objects
        // console.log(charObj)            // charObj -->          { a: 1, b: 3, c: 1 }
        // console.log(charKey)            // charKey -->          a
        // console.log(charObj[charKey])   // charObj[charKey] --> 1

        if (charObj[charKey] > max) {      // if a given keys value is > than max
            max = charObj[charKey]         // make the new value, the new max
            maxChar = charKey              // make the new maxChar the key AKA character
        }
    }
    return maxChar                         // return character that occurs the most
}



















console.log(maxChar('abbbc'))













module.exports = maxChar;
