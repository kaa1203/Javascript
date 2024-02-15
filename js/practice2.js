// #1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// #2: Print the odd numbers less than 100
for (let i = 0; i < 100; i++) {
    // if (i % 2 !== 0) console.log(i);    
}

// #3: Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
    // console.log(`${7} x ${i} = ${7 * i}`);
}

// #4: Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`------Line of ${i}------`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${j * i}`);       
    }
}

// #5: Calculate the sum of numbers from 1 to 10

// let sum = 0;
for (let i = 1; i <= 10; i++) {
    // sum += i;
}
// console.log(sum);

// #6: Calculate 10! (factorial)

// let num = 10;
// for (let i = num; i >= 1; i--) {
    // num *= i;
// }

// console.log(num);

// #7: Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//       if (i % 2 !== 0) {
//           if (i > 10 && i < 30) {
//               sum += i;
//           }
//       }
// }

// for (let i = 11; i <= 30; i+=2) {
//     sum += i;
// }

// console.log(sum);

// #8: Create a function that will convert from Celsius to Fahrenheit
const celToFah = (cel) => (9 / 5 * cel + 32).toFixed(1);
// console.log(celToFah(10));
// console.log(celToFah(37));

// #9: Create a function that will convert from Fahrenheit to Celsius
const fahToCel = (fah) => ((fah - 32) * (5/9)).toFixed(1);
// console.log(fahToCel(68));
// console.log(fahToCel(98));

// #10: Calculate the sum of numbers in an array of numbers
// const array = [131, 1543, 115, 96, 112];
const array = [2, 3, -1, 5, 7, 9, 10, 15, 95];

let sum = array.reduce((total, num) => total += num, 0);
// console.log(sum);

// #11: Calculate the average of the numbers in an array of numbers

const ave = (nums) => nums.reduce((total, num) => total += num) / nums.length;

// console.log(ave([2,4,6,8,10]));
// console.log(ave([1,3,9,15,90]));
// console.log(ave(array));

// #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
const posNum = (nums) => nums.filter(num => num >= 0);

// console.log(posNum([1, -2, -2, -5, 3, 6]));
// console.log(posNum([1, -2, 2, -5, 3, -6, 4, -8, 5]));

// #13: Find the maximum number in an array of numbers

const max = (nums) => nums.sort((a, b) => a - b).splice(nums.length - 1, 1).join("");

// console.log(max([1, 23, 5, 600, 8, 12, 99, 120]));

// #14: Print the first 10 Fibonacci numbers without recursion
const n = 10
let fib = [];
fib[0] = 0;
fib[1] = 1;

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

// console.log(fib.join(", "));

// #15: Create a function that will find the nth Fibonacci number using recursion 
function findFibonacci(num) {
    if (num == 0) {
        return 0;   
    }
    if (num == 1) {
        return 1;   
    }
    return findFibonacci(num - 1) + findFibonacci(num - 2); 
}

console.log(findFibonacci(10))