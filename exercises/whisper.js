'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */

const whisper = (str) => str.toLowerCase()
//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('LOUISE'), 'louise')
assert.deepStrictEqual(whisper('BLaBLaBLABLa'), 'blablablabla')
assert.deepStrictEqual(whisper('YIHOoOoOOo'), 'yihooooooo')
// End of tests */
