'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */
const cutFirst = (str) => str.substring(0, str.length -2)
const cutLast = (str) => str.substring(2)
const cutFirstLast = (str) => cutFirst(cutLast(str))


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('louise'), 'loui')
assert.deepStrictEqual(cutLast('louise'), 'uise')
assert.deepStrictEqual(cutFirstLast('louise'), 'ui')
assert.deepStrictEqual(cutFirst('La vie est belle'), 'La vie est bel')
assert.deepStrictEqual(cutLast('La vie est belle'), ' vie est belle')
assert.deepStrictEqual(cutFirstLast('La vie est belle'), ' vie est bel')
// End of tests */
