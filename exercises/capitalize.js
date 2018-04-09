'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 */

// const capitalize = (str) => {
//   console.log(str.toLowerCase().charAt(0).toUpperCase())
// }

// repeat a string
const repeat2Times = (str) => {
 const finalStr = []
 for (let i = 0; i < 2; i++) {
   finalStr.push(str)
 }
 return finalStr.join(' ')
}

// put words on a table
const words = (str) => str.split(' ')

// string to lower case
const whisper = (str) => str.toLowerCase()

// remove the first letter of a string
const keepTheRestOfTheWord = (str) => str.substring(1)

// get the first letter of a string
const getFirstLetter = (str) => str.charAt(0)

const capitalize = (str) => {
  // put the result of the string * 2 on the table tabString
  const tabString = words(repeat2Times(str))
  const wordEnd = keepTheRestOfTheWord(whisper(tabString[0]))
  const wordBeginning = getFirstLetter(tabString[1]).toUpperCase()
  return wordBeginning + wordEnd
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
