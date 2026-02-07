// complete the challenge here 👇

// Number List
let numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41]

// Even/Odd Counter

let odd = 0
let even = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even++
  } else {
    odd++
  }
}
console.log(`Odd numbers: ${odd}`)
console.log(`Even numbers: ${even}`)

console.log()

// Range Classifier
let low = 0
let medium = 0
let high = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 70) {
    high++
  } else if (numbers[i] >= 30) {
    medium++
  } else {
    low++
  }
}
console.log(`High numbers: ${high}`)
console.log(`Medium numbers: ${medium}`)
console.log(`Low numbers: ${low}`)

// Sum and Average
let sum = 0
let avg = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
  avg += numbers[i] / numbers.length
}

console.log()

console.log(`Sum: ${sum}`)
console.log(`Average: ${avg}`)


