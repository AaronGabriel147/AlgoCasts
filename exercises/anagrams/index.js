// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// removes white space and punctuation 
// const word = 'hi there'
// word.replace(/[^\w]/g, "").toLowerCase()


// [x] strip string using regex. end up with a string of all lowercase letter, no spaces or punctuation
// [x] turn string into an object
// use for in loop and other "maxChar" concepts
// once an object of key value pairs exist, put them in order in descending order
// then compare A and B and return true or false




// function buildCharMap(str) {
//     const charMap = {}
//     for (let charKey of str.replace(/[^\w]/g, "").toLowerCase()) {
//         if (charMap[charKey]) {
//             charMap[charKey]++
//         }
//         else charMap[charKey] = 1
//     }
//     return charMap
// }


// function anagrams(stringA, stringB) {

// let objectA = {}
// let objectB = {}

// for (let charKey of strA) {        // turns string into object and counts occurrences 
//     if (objectA[charKey]) {
//         objectA[charKey]++
//     }
//     else objectA[charKey] = 1
// }

// for (let charKey of strB) {        // turns string into object and counts occurrences 
//     if (objectB[charKey]) {
//         objectB[charKey]++
//     }
//     else objectB[charKey] = 1
// }

// console.log(objectA)
// console.log(objectB)


// for (let charKey in objectA) {

//     if (objectA[charKey] === objectB[charKey]) {
//         return true
//     }
// }



// return objectA
// }



// ===========================================================







// helper function, it cleans and sorts
function cleanString(str) {

    return str.replace(/[^\w]/g, '')   // regex that cleans text of white space and punctuation
        .toLowerCase()                 // makes all lower cast
        .split('')                     // turns it into an array in order for us to use .sort which is an array method
        .sort()                        // sorts alphabetically
        .join('')                      // turns array back into a string
}


function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)   // compares 2 strings, true if match, else false
}


console.log(anagrams('abb c', 'abc'))




























module.exports = anagrams;
