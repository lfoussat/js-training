'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
const toTotal = (acc, num) => acc + num
const total = (arr) => arr.reduce(toTotal)

const isPositive = num => num > 0 ? true : false

const abs = num => num >= 0 ? num : num * -1

const multiplyPositive = (a, b) => {
  let i = 0
  let total = 0
  while (i < b) {
    total = total + a
    i++
  }
  return total
}

const multiplyNegToPos = (a, b) => multiplyPositive(abs(a), abs(b))

const multiply = (a, b) => {
  if (a === 0 || b === 0) {
    return 0
  } else if (isPositive(a) === false && isPositive(b) === false) {
    return multiplyNegToPos(a, b)
  } else if (isPositive(a) === false || isPositive(b) === false) {
    const resultMultiply = multiplyNegToPos(a, b)
    return - resultMultiply
  }
  return multiplyPositive(a, b)
}




//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
