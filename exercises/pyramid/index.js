// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {

    if (row === n) return

    if (level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1)
    }

    const midpoint = Math.floor((2 * n - 1) / 2)

    let add

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, level + add)

}

// _ _ # _ _
// _ # # # _
// # # # # # 


console.log(pyramid(3))






// function steps(n) {

// for (let i = 0; i < n; i++) {     // i = row
//     let dash = ''

//     for (let j = 0; j < n; j++) { // j = column

//         if (j <= i) dash += '#'
//         else dash += '-'


//         // console.log('column =', j)  // if equal or less to row - add # to '-', else add '-' to '-'
//         // console.log('row =', i)
//         console.log(dash)
//     }
//     console.log('___________')
// }
// return dash //  Only returns #
// }


// console.log(steps(3))

module.exports = pyramid;
