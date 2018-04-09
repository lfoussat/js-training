'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

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

// make a sentence with a table
 const sentence = (arr) => arr.join(' ')

 const jadenCase = (str) => {
   const newTabSentence = []
   const tabSentence = words(str)
   for (let i = 0; i < tabSentence.length; i++) {
     if (tabSentence[i] === `?` || tabSentence[i] === `!` || tabSentence[i] === `:` || tabSentence[i] === `;`) {
       newTabSentence.push(tabSentence[i])
     }
     // else if (getFirstLetter(tabSentence[i]) === `(` || getFirstLetter(tabSentence[i]) === `"` || getFirstLetter(tabSentence[i]) === `'`){
     //   newTabSentence.push(capitalize(tabSentence[i]))
     // }
     else {
       newTabSentence.push(capitalize(tabSentence[i]))
     }
   }
   return sentence(newTabSentence)
 }
// jadenCase('How are you ?')

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('my name Is lOuise'), 'My Name Is Louise')
// assert.strictEqual(jadenCase('my name Is (I think) lOuise'), 'My Name Is (I Think) Louise')

// faire un tableau avec les caract speciaux puis tab.include()

// End of tests */
