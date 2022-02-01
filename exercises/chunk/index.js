// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// chunk([1, 2, 3, 4], 2)               --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2)            --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)   --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4)            --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10)           --> [[ 1, 2, 3, 4, 5]]


// take array length (4)
// slice array at the size arg number (2)
// if slice by size does not exist due to length not being enough, simply push  

// my failed attempt
// for reference // const sliced = array.slice(0, size)
//    const newArray = []
//     let counter = 0

//     for (let num of array) {
//         num += counter

//         if (newArray === size) {

//             newArray.push(array.slice(0, size))
//         }
//     }
//     return newArray


// stephens, which I prefer.
function chunk(array, size) {

    const chunked = []                                    // array for pushing
    let index = 0                                         // counter 0, will turn to 10 on first iteration

    while (index < array.length) {                        // while 0 < 4
        chunked.push(array.slice(index, index + size))    // TROUBLE UNDERSTANDING THIS LINE slice creates an array. push to chunked a new array starting at 0, ending at 2

        index = index + size                              // 1 + 1 + 9 = turns index into 10
    }
    return chunked
}

console.log(chunk([1, 2, 3, 4,], 2))












// stephens which I do not like 
// function chunk(array, size) {

//     const chunked = []

//     for (let element of array) {
//         const last = chunked[chunked.length - 1]

//         if (!last || last.length === size) {
//             chunked.push([element])
//         }

//         else {
//             last.push(element)
//         }
//     }
//     return chunked
// }



























module.exports = chunk;
