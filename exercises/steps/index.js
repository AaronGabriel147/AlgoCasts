// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'



// Iterative solution:

function steps(n) {

    for (let i = 0; i < n; i++) {     // i = row
        let dash = ''

        for (let j = 0; j < n; j++) { // j = column

            if (j <= i) dash += '#'
            else dash += '-'


            // console.log('column =', j)  // if equal or less to row - add # to '-', else add '-' to '-'
            // console.log('row =', i)
            console.log(dash)
        }
        console.log('___________')
    }
    // return dash //  Only returns #
}


console.log(steps(3))

// ====================================================













// Identify the base case.
// Recursive solution:

// function steps(n, row = 0, stair = '') {

//     if (n === row) return

//     if (n === stair.length) {
//         console.log(stair)
//         return steps(n, row + 1)
//     }

//     if (stair.length <= row) stair += '#'
//     else stair += ' '


//     steps(n, row, stair)

// }



// console.log(steps(10))





























module.exports = steps;
