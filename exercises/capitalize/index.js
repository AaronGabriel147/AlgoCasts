// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// const word = 'abc hey'

// const capFirst = word[0].toUpperCase()
// const restOfWord = word.slice(1)
// const concat = capFirst + restOfWord

// console.log(concat)





// const splitString = str  //  .split(' ')


function capitalize(str) {


    str.split(' ').map((item) => {
        console.log(item[0].toUpperCase())
    })

    str.split(' ').map((item) => {
        console.log(item.slice(1))
    })


    // const capFirst = str[0].toUpperCase()
    // const restOfWord = str.slice(1)

    // finalString = capFirst + restOfWord


}






console.log(capitalize('hello there little buddy.'))

































module.exports = capitalize;
