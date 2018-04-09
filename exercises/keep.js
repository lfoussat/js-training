'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
const keepLast = (str) => str.slice(-2)
const keepFirst = (str) => str.substring(0,2)
const keepFirstLast = (str) => str.substr(2,2)


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepLast('louise'), 'se')
assert.deepStrictEqual(keepFirst('louise'), 'lo')
assert.deepStrictEqual(keepFirstLast('louise'), 'ui')
assert.deepStrictEqual(keepLast('La vie est belle'), 'le')
assert.deepStrictEqual(keepFirst('La vie est belle'), 'La')
assert.deepStrictEqual(keepFirstLast('La vie est belle'), ' v')
// End of tests */
