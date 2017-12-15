function sum (x, y) {
  return x + y
}

console.log(sum(2, 5))

function multiply (x, y) {
  return x * y
}

console.log(multiply(5, 5))

function minus (x, y) {
  return x - y
}

console.log(minus(12, 3))

function div (x, y) {
  return x / y
}

console.log(div(15, 3))

function pow (x, n) {
  return Math.pow(x, n)
}

console.log(pow(2, 3))

function sqrt (x) {
  return Math.sqrt(x)
}

console.log(sqrt(9))

function cos (x) {
  return Math.cos(x)
}

console.log(cos(12))

function sin (x) {
  return Math.sin(x)
}

console.log(sin(28))

function factorial (n) {
  var x = n
  while (n > 1) {
    n--
    x *= n
  }
  return x
}

console.log(factorial(4))




