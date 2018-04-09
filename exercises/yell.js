'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
 const yell = (str) => str.toUpperCase()


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('louise'), 'LOUISE')
assert.deepStrictEqual(yell('BLaBLaBLABLa'), 'BLABLABLABLA')
assert.deepStrictEqual(yell('YIHOoOoOOo'), 'YIHOOOOOOO')
// End of tests */
