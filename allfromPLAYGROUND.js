
// Description
// From the year you were born until now is a certain number of years. What year was it that many years before your birth year?
// For example, if a person was born in 2000 and it is now 2021, their "flip year" would be 1979. (Because they are 21 years old, and there are 21 years between 1979 and 2000.)

// Down with while loop and simplistic names:
// function formula(ten, twenty) {
//     let count = 0;

//     while (ten < twenty) {
//         count = count + 1;
//         ten = ten + 1;
//     }
//     return ten - count;
// }

// Done with for loop:
// function solution(birth_year, current_year) {
//     let count = 0;

//     for (let i = birth_year; i < current_year; i++) {
//         count = count + 1;
//     }
//     return birth_year - count;
// }

// console.log(solution(2000, 2021));

// ________________________________________________________

// Write a function that computes the sum of all values between n and m, inclusive.
// Example

// Input:
// n == 5
// m == 9

// Computation by hand:
// 5 + 6 + 7 + 8 + 9 == 35

// Failed, try with for loop instead.
// function solution(n, m) {
//     let count = n;

//     while(n < m){
//         count = count + count + 1;
//         n = n + 1;
//     }
//     return count;
// }

// ALL MISTAKES ------
// function solution(n, m) {
//     let numArray = [];                    // Starts off as []
//     let count = n;

//     for (let i = n; i < m; i++) {         // this will iterate 5 time (5 6 7 8 9)

//         count = count + count + 1
//         console.log(count)
//         numArray.push(count)

//     }
//     return numArray;
// }


// console.log(solution(5, 9))


// correct answer
// function solution(n, m) {
//     return n * (n + m) / 2
//   }



// _____________________________________________________


// // ??????????????

// function solution(a, b, c) {
//     console.log('===================================')
//     if (
//         a > b &&
//         b <= c &&
//         a * 3 > c ||
//         c <= a
//     ) return "OK"
//     else return "NOK"
// }

// console.log(solution(728, 627, 4))





// Description
// Write a function that takes an amount to withdraw from an account, along with the current balance.

// If there isn't enough in the account to make the withdrawal, return -1. Otherwise return the remaining balance after the withdrawal.

// Example
// Input:

// amount == 100
// balance == 300
// Output:

// 200
// Input:

// amount == 50
// balance == 25
// Output:

// -1

// function solution(x) {
//     return x
// }


// console.log(solution('x'))



// =============================================




// function reverse(str) {

//     let reversed = '';

//     for (let character of str) {                    // ES 2015 introduced FOR OF
//         reversed = character + reversed;            // adding new while keeping the old.
//     }

//     return reversed;
// };


// console.log(reverse('abc'))


// ====================================================



// function solution(n, m) {

//     console.log('elloooooo', n)
//     let a = '';
//     let num = n;
//     while (num > 0) {
//         num = num - 1;
//         a = "A";
//     }
//     return a;

//     console.log('asfasfa')

// };

// console.log(solution(59, 233))



// ========================================================


// // Compute the factorial of an integer n. This is commonly written as n!, which is read as "n factorial".

// // You must use a loop to solve this problem. You cannot hard-code the answers.

// // The factorial of a number is the product of every integer between 1 and n.

// // Special case: the factorial of 0 is defined to be 1.

// // Example
// // Input:

// // n == 3
// // Output:

// // 6   (because 1 * 2 * 3 == 6)


// function solution(n) {
//     let counter = 1;

//     for (let i = 1; i < n + 1; i++) {
//         counter = i * counter
//     }
//     return counter
// }


// console.log(solution(5)) // works. 120



// =======================================================


// Description
// Compute the product of all numbers from a to b, inclusive.

// Example
// Input:

// a == 2
// b == 7
// Output:

// 5040  (because 2 * 3 * 4 * 5 * 6 * 7 == 5040)

// function solution(a, b) {
//     let counter = a;
//     let product = 1;

//     while (counter <= b) {
//         product = product * counter
//         counter = counter + 1
//     }
//     return product
// }


// ============================================================


// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.


// function solution(a) {
//     let obj = {};
//     let arr = [];

//     for (let i = 0; i < a.length; i++) {
//         if (obj[a[i]]) {
//             obj[a[i]] = obj[a[i]] + 1
//         } else {
//             obj[a[i]] = 1
//         }
//     }

//     for (let key in obj) {
//         arr.push(parseInt(key))
//     }

//     arr.sort((a, b) => a - b)

//     return arr
// }


// console.log(solution([1, 33, 56, 24]))




// ============================================================




// You have a string s. Split s into the minimum possible number of increasing substrings.
// A substring is considered to be increasing when the next symbol in the substring is also
// next in the English alphabet. This is case sensitive, i.e. 'b' is next for 'a' but 'C' is
// not next for 'b'. Return an array of these substrings.
//
// Example
//
// For s = "ABCDEFFDEfghCBA", the output should be
// solution(s) = ["ABCDEF", "F", "DE", "fgh", "C", "B", "A"].






// ============================================================




// Return the number of occurrences of v in array a.

// If the array is empty, return 0.

// Example
// Input:
// a == [1, 7, 2, 10, 7]
// v == 7

// Output:
// 2



// function solution(a, v) {

//     let vs = []

//     for (let i = 0; i < a.length; i++) {
//         // console.log(a[i])
//         if (a[i] === v) vs.push(a[i])
//     }

//     return vs.length
// }


// console.log(solution([1, 2, 2, 3], 2))



// =====================================================


// Description
// Return true if two arrays are equal.

// The arrays are equal if they are the same length and contain the same value at each
// particular index.
// Two empty arrays are equal.

// Example
// Input:

// a == [1, 7, 2, 10, 7]
// b == [1, 7, 2, 10, 7]
// Output:

// true





// things went awry
// function solution(a, b) {
//     let sortA = a.sort()
//     let sortB = b.sort()

//     if (sortA.length === sortB.length) {
//         for (let i = 0; i < a.length; i++) {
//             if (sortA[i] === sortB[i]) return true
//             return false
//         }
//     }
// }


// =======================================================






// For two arrays a and b of the same length, let's say a is a cyclic shift of b,
// if it's possible for a to become equal to b by performing cyclic shift operations on a
// moving 0 or more elements from the beginning of the array to the end of the array
// without changing the order of the elements.

// You are given an array of integers elements. Your task is to check whether elements
// is a cyclic shift of the sorted array [1, 2, ..., elements.length]. Return the number
// of elements you need to move to make elements equal to the sorted array.
// If elements is not a cyclic shift of the sorted array (it's not possible to make them equal),
// return -1.


// For elements = [3, 4, 5, 1, 2], the output should be solution(elements) = 3.

// If we move the first 3 elements of the given array from the beginning to
// the end, we get [1, 2, 3, 4, 5], which is equal to the sorted array [1, 2, 3, 4, 5],
// so the answer is 3.


// we need to make a loop that created a sorted array of 1,2,3,4,5... that is the same length as the input.








// // this helper function shifts the first item of an array to the end.
// function shifter(arr) {
//     let first = arr.shift()
//     arr.push(first)
//     return arr
// }


// function solution(elements) {                                   // sorted array creator to compare to our argument
//     let sortedArr = []                                          // will end up looking like: [1,2,3,4,5]
//     for (let i = 1; i < elements.length + 1; i++) {
//         sortedArr.push(i)
//     }

//     let finalShiftedArr = []                                    // stores the last iteration of the shifted array
//     let counter = 0                                             // counts how many shifts occur
//     for (let i = 0; i < elements.length; i++) {
//         if (!elements.every((v, i) => v === sortedArr[i])) {    // bool check to see if 2 arrays match (in order)
//             finalShiftedArr = shifter(elements)                 // if there is no match, use shifter() and counter
//             counter += 1
//         }
//     }
//     if (!finalShiftedArr.every((v, i) => v === sortedArr[i])) { // checks if finalShiftedArr matches sortedArr
//         return -1                                               // if no match, return -1
//     } else return counter                                       // if matches, return counter
// }




// ========================================================


// digits = [1, 2, 3], the output should be solution(digits) = [1, 2, 4];

// function solution(digits) {

//     let last = digits.pop() + 1  // 4   // adds 1 to end
//     digits.push(last)
//     return digits
// }



// =================================================





// Description
// This function accepts an array. It should return true if the array elements read the same forward and backward, i.e. if the array is a palindrome.

// An empty array is a palindrome.

// Example
// Input:

// a == [0, 1, 2, 1, 0]
// Output:

// true
// Input:

// a == [1, 2, 3, 4]
// Output:

// false

// function solution(a) {
//     const b = [...a].reverse() // makes copy and reverses it. Otherwise you reverse the original.

//     for (let i = 0; i < a.length; i++) {
//         if (b[i] !== a[i]) {
//             return false
//         }
//     }
//     return true
// }

// =========================================================



// Description
// Given an input array a determine the length of the leading "run" of numbers. The run is how many numbers at the front of the array are the same.

// If the array is empty, return 0.

// Example
// Input:

// a == [7, 7, 7, 4, 7, 2]
// Output:

// 3

// function solution(a) {
//     if(a.length === 0) return 0
//     let count = 1
//     let match = a[0]

//     for(let i = 1; i < a.length; i++) {

//         if(a[i] === match) count ++
//         else break
//     }
//     return count
// }




// ================================================










// Avoid using built-in big integers to solve this challenge. Implement them yourself,
// since this is what you would be asked to do during a real interview.

// Given two binary strings a and b, add them together and return the resulting string.

// Example

// For a = "1000" and b = "111", the output should be
// solution(a, b) = "1111";
// For a = "1" and b = "1", the output should be
// solution(a, b) = "10".




// Adding in binary:
// 1 + 0 = 1
// 0 + 0 = 0
// 1 + 1 = 10
// 1 + 1 + 1 = 11


// NOTE: special things need to happen when 2 digits:

// if  1 + 0 = 1         then push 1           // [1]
// else if 0 + 0 = 0     then push 0           // [1, 0]
// else if 1 + 1 = 10    then ?                // [1, 0]
// else                  ?

// above would the the equivalent of:
//   1
//  101
//  001
// _____
//  110


// let newArr = [1, 0, 10] // if I simply pushed it would be wrong, as seen here.

// function solution(a, b) {
//     let x = (parseInt(a, 2) + parseInt(b, 2)).toString(2) // creates a base 2 system, which is binary.
//     return x
// }

// 1 line arrow function
// let solution = (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2)


// loop through each binary number, adding the right most bit to each other, then concat to sum
// function solution(a, b) {


// }

// xor (^) - same: 0, diff: 1
// a b c = s c
// 0 0 0 = 0 0
// 0 0 0 = 1 0
// 1 0 0 = 1 0
// 1 0 1 = 0 1
// 1 1 1 = 1 1


// =====================================================



// You are given an array of positive integers arr. You'd like to know how many triangles can be formed with
// side lengths equal to adjacent elements from arr.

// Construct an array of integers of length arr.length - 2, where the ith element is equal to 1 if it's
// possible to form a triangle with side lengths arr[i], arr[i + 1], and arr[i + 2], otherwise 0.

// Return the resulting array of integers.

// Note: A triangle can be formed with side lengths a, b, and c if a + b > c, a + c > b, and b + c > a.

// Example

// For arr = [1, 2, 2, 4], the output should be solution(arr) = [1, 0].

// output[0] = 1 because we can form a triangle with side lengths 1, 2, and 2.
// output[1] = 0 because 2 + 2 ≤ 4, so we can't form a triangle with side lengths 2, 2, and 4.

// For arr = [2, 10, 2, 10, 2], the output should be solution(arr) = [0, 1, 0].
// output[0] = 0 because 2 + 2 ≤ 10, so we can't form a triangle with side lengths 2, 2, and 10.
// output[1] = 1 because we can form a triangle with side lengths 2, 10, and 10.
// output[2] = 0 because 2 + 2 ≤ 10, so we can't form a triangle with side lengths 2, 2, and 10.

// For arr = [1000000000, 1000000000, 1000000000, 1000000000], the output should be solution(arr) = [1, 1].

// All elements of the resulting array are equal to 1, because all elements of the array are the same,
// therefore they can form equilateral triangles.


// TA did this. I failed to figure it out. I misread the instructions.
// function solution(arr) {
//     let finalArr = []

//     for (let i = 0; i < arr.length - 2; i++) {
//         let a = arr[i]
//         let b = arr[i + 1]
//         let c = arr[i + 2]

//         if (a + b > c && a + c > b && b + c > a) {
//             finalArr.push(1)
//         }
//         else finalArr.push(0)
//     }
//     return finalArr
// }



// ===========================================================






// Construct a string of p copies of n capital "A"s and m capital "B"s.

// Except if the copy number is evenly divisible by 3, in which case insert a string of p capital "X"s instead.
// Copy numbers begin with 0 for the first copy.
// Do not use any built-in string duplication functionality to solve this.

// Example
// Input:

// p = 3
// n = 1
// m = 1

// Output:

// "XXXABAB"  (would be "ABABAB", but the one in the 0th place is evenly divisible by 3)


// Input:

// p == 5
// n == 1
// m = 0

// Output:

// "XXXXXAAXXXXXA"  (0th and 3rd "A"s replaced with "XXXXX")



// function solution(p, n, m) {



// }



// console.log(solution(5, 1, 0)) // expect "XXXXXAAXXXXXA"




// ===========================================================




// Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// Array a mutates into a new array b of length n.
// For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0.
// For example, b[0] should be equal to 0 + a[0] + a[1].
// Example

// For n = 5 and a = [4, 0, 1, -2, 3], the output should be solution(n, a) = [4, 5, -1, 2, 1].

// b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
// b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
// b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
// b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
// So, the resulting array after the mutation will be [4, 5, -1, 2, 1].

// function solution(n, a) {










// ==============================================================




// You are given a string s. Consider the following algorithm applied to this string:

// Take all the prefixes of the string, and choose the longest palindrome between them.
// If this chosen prefix contains at least two characters, cut this prefix from s and go back
// to the first step with the updated string. Otherwise, end the algorithm with the current string s as a result.
// Your task is to implement the above algorithm and return its result when applied to string s.


// Example

// For s = "aaacodedoc", the output should be solution(s) = "".

// The initial string s = "aaacodedoc" contains only three prefixes which are also palindromes
// - "a", "aa", "aaa". The longest one between them is "aaa", so we cut if from s.
// Now we have string "codedoc". It contains two prefixes which are also palindromes
// - "c" and "codedoc". The longest one between them is "codedoc", so we cut if
// from the current string and obtain the empty string.
// Finally the algorithm ends on the empty string, so the answer is "".

// For s = "codesignal", the output should be solution(s) = "codesignal".
// The initial string s = "codesignal" contains the only prefix, which is also palindrome
//  - "c". This prefix is the longest, but doesn't contain two characters,
//   so the algorithm ends with string "codesignal" as a result.

// For s = "", the output should be solution(s) = "".

// Input:
// s: "abbab"
// Output: "b"

// Input:
// s: "aaabba"
// Output: "a"


// --------------------------------------------------------

// REFERENCES:

// how to iterate backwards but I do not think I wam going that route.
// let reversed = "";
// for (let i = s.length - 1; i >= 0; i--) { // > = i counts down backwards starting at end of string len
//     reversed += s[i];
// }
// return reversed;


// ---------------------------------------------------------------







// let len = s.length
// if ('' === s) return ''                    // empty string check

// let leftovers = []                         // will take whatever is left at the end, join('') it and return it

// if (s[i] === s[i+1] || s[i] === s[i-1]) palindrome.push(s[i]); // maybe s[0] rather than -1


// ---------------------------------------------------------

// [x] if S (string) = "", return ""
// [x]lets reverse the string for step 1 and make a for loop

// must compare reversed string to original string
// if there is a match && the rest of the loop comparison matches, remove match   // (how to check the rest of the loop?)
// if s[0] !== len - 1 then check to the right of s[0], remove matches
// repeat


// 3 hours of hell on this. still not close. had to stop.
// function solution(s) {

//     let reversed = s.split('').reverse()                    // ['a','a', 'a' ....etc]
//     if (reversed.join('') === s) return 'All matches.'      // if all match, return all

//     let char = s.split('')
//     let palindrome = []

//     // we want to mutate the original. Lets try pop()

//     // for (let i = 0; i < char.length; i++) {
//     // if (char[0] === char[i]) {
//     //     // let popped = char[i].pop()
//     //     console.log(typeof char[i])
//     //     palindrome.push(char[i])

//     //     }
//     // }

//     char.forEach((item, i) => {
//         if (char[0] === char[i]) {
//             item.splice(i, 1);
//             // console.log(typeof char[i])
//             // palindrome.push(char[i])
//         }
//     })

//     console.log('char', char)
//     return palindrome
// }

// console.log(solution('aaaab'))




// ------------------------------------------------------------




// function row(size) {
// while (size > 0) {
//     size--
//     row.push(1)
// }
// return row
// }

// ------------------------------------------------------------



// preferred for the most basic matrix
// function solution(size) {                        // size = 3
//     let result = []

//     for (let i = 0; i < size; i++) {

//         let row = []                             // [] [] []  - creates a new array for each row

//         for (let j = 0; j < size; j++) {

//             row.push(0)                          // 123123123 - all on their own line
//         }

//         result.push(row)                         // 123 - all on their own line
//     }
//     return result                                // [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
// }


// ==============================================================



// Description
// Create a square 2D array of size size x size. Fill the array with 0.

// Then draw a line of 1s down the main diagonal.

// This is called an identity matrix.

// Example
// Input:

// size == 4
// Output:

// [
//     [1, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1]
// ]



// function solution(size) {
//     let result = []

//     for (let i = 0; i < size; i++) {
//         let row = []

//         for (let j = 0; j < size; j++) {
//             row.push(0)
//         }

//         result.push(row)
//     }

//     for (let i = 0; i < size; i++) {
//         result[i][i] = 1               // The second [i] is what increments and places the 1 in a higher spot in each arr
//         // console.log(result[i][i])
//     }

//     return result
// }

// console.log(solution(4))



// =====================================================================


// There is a bug in one line of the code. Find it, fix it, and submit.
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]


// take char and add an asterisk on each side
// take char.length and create a string of asterisks that long
// push asterisks strings in front and back of char


// unshift pushes to front - push pushes to back



// function solution(charArr) {  // ['a']

//     let newArr = []
//     newArr.push('*', charArr, '*')                                // maybe inside a look push item with asterisks on each side
//     let charAsterisk = newArr.join('')
//     let arrAsterisk = [charAsterisk]           // [ '*abc*' ]

//     let asterisks = ''                         // ***

//     // creates the right amount of asterisks & adds them to variable
//     for (let i = 0; i < charAsterisk.length; i++) asterisks += '*'

// arrAsterisk.unshift(asterisks)             // [ '***', '*a*' ]
// arrAsterisk.push(asterisks)                // [ '***', '*a*', '***' ]


//     return arrAsterisk                         // [ '***', '*a*', '***' ]

// }

// console.log(solution(['a']))




// ------------------




//  works here but fails in CodeSignal. Not sure why.
// function solution(picture) {

//     let newArr = []
//     let asterisks = ''     // '****'

//     picture.forEach((item, index) => {
//         newArr.push(`*${item}*`)
//     })

//     for (let i = 0; i < newArr[1].length; i++) {
//         // console.log(i) // 01234

//         asterisks += '*'
//     }

//     newArr.unshift(asterisks)             // [ '***', '*a*' ]
//     newArr.push(asterisks)                // [ '***', '*a*', '***' ]

//     return newArr
// }

// console.log(solution(['aa', '**', 'zz']))






// ====================================================

// what is this?

// function solution(n) {


//     let x = [n]    // [ 123 ]
//     let y = []

//     for (let i = 0; i < 3; i++) {
//         y.push(x[i])
//         for (let i = 0; i < 3; i++) {
//             y.push(x[i])
//         }
//     }

//     console.log(x)

// }


// ========================================================



// Return a substring (part of a string) between two indexes.

// The substring from index a up to (but not including) index b should be returned.

// If a is less than 0, treat it like 0.

// If b is greater than the length of the string, treat it like the length of the string.

// If b is less than a, return an empty string.

// Input:

// s == "abcde"
// a == 2
// b == 4

// Output:

// "cd"


// function solution(s, a, b) {

//     return s.slice(a, b)

// }


// ==================================================



// Description
// Write a function that builds an n x n multiplication table.

// The result will be a 2D array. The 0th row and column of
// the table begin with 1 and end with n.

// Input:
// n == 4

// Output:
// [
//     [1, 2,  3,  4],
//     [2, 4,  6,  8],
//     [3, 6,  9, 12],
//     [4, 8, 12, 16]
// ]












// function solution(n) {

//     let result = []

//     for (let i = 0; i < n; i++) {

//         let rowArrays = []                   // [] [] []  - creates a new array for each row

//         for (let j = 0; j < n; j++) {
//             let row = i + 1
//             let column = j + 1
//             let multiplied = row * column

//             rowArrays.push(multiplied)

//             // console.log(multiplied)
//             // console.log('i =', row)   // row - 4 iterations of 1111 2222 3333 4444
//             // console.log('j =', column)   // column - 4 iterations of 1 2 3 4
//         }
//         result.push(rowArrays)
//         // console.log('________')
//     }

//     return result
// }


// console.log(solution(3))


// ---------------------------------------------------------------


// This function should scan an array for certain elements and remove them.

// Example
// Input:

// a == [0, 5, 6, 2, 7, 8, 5, 3, 4, 5]
// x = 5     Remove all 5s
// Output:
// [0, 6, 2, 7, 8, 3, 4]


// function solution(a, x) {

//     let newArr = []

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== x) {
//             newArr.push(a[i])
//         }
//     }
//     return newArr
// }

// console.log(solution([0, 5, 6, 2, 7, 8, 5, 3, 4, 5], 5))



// ==================================



// You have an array p of points on a Cartesian plane. Find and return the minimum 
// possible Euclidian distance between two points with different indices in p.

// Example

// For p = [[0, 11], [-7, 1], [-5, -3]], the output should be
// solution(p) = 4.472135955.

// DID NOT ATTEMPT YET

// function solution(p) {

// }


// =================================================






// For a given current odometer reading, when is the next odometer palindrome?

// If the odometer is currently at a palindrome, we're still interested in the next one.

// The input is an integer, but the result should be a string padding with leading zeros to 6 places.

// Input:
// current = 37

// Output:
// "001100"

// Input:
// current = 123320

// Output:
// "123321"

// Input:
// current = 999999

// Output:
// "000000"


function solution(current) {

}


console.log(solution(37))
