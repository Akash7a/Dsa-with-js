// solving number problems
// 1. print numbers from 1 to n

// const num3 = Number(prompt("Enter a number:"));

// for (let counter = 1; counter <= num3; counter++) {
    // console.log(counter)
// }
const container = document.querySelector(".container");
const numberInput = document.querySelector("#numberInput");
const printButton = document.querySelector("#printButton");

const printResult = () => {
    const input = Number(numberInput.value);
    if (!isNaN(input) || input > 0) {
        for (let counter = 1; counter <= input; counter++) {
            const numberElem = document.createElement("p");
            numberElem.textContent = counter;

            container.appendChild(numberElem);
        }
    }
    numberInput.value = "";
}

printButton.addEventListener("click", printResult);

// 2 .print numbers from n to 1 without changing the loop
// const num = 100;

// for (let counter = 1; counter <= num; counter++) {
//  console.log(num - counter)
// }

// 3. print even numbers from 1 to n
// const num2 = 10;
// for (let counter = 1; counter <= num2; counter++) {
//     if (counter % 2 === 0) {
        // console.log(counter);
//     } else {
        // console.log(counter)
//     }
// }

// 4. sum of first n natural numbers 
// brute force approach 
// // it takes more that 2 seconds 

// console.time();

let n = 100000000;
let sum = n * (n + 1) / 2;

for (let counter = 1; counter <= n; counter++) {
    sum += counter;
}
// console.log(sum)
// console.timeEnd()

// 5 . factorial of n 

let num = 5;
let product = 1;

for (let counter = 1; counter <= num; counter++) {
    product *= counter;
}


// 6. print all numbers divisible by 3 and 5 up to n 

let number = 30;

for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log(i)
    }
}

// 7 . find the sum of all odd numbers up to n

let number2 = 10;

let sum2 = 0;

for (let i = 1; i <=number2; i++){
    if (i % 2 !== 0){
        sum2 += i;
    }
}

// console.log(sum2)

//  8 .print the cube of the numbers from 1 to n ;

let number3 = 5;

for (let i = 1; i <=number3; i++){
    // console.log(i ** 3)
}

// 9. print only numbers that are both even and perfect squares up to n

let number4 = 100;

for(let i = 1; i <= number4; i++){

    let root = Math.floor(Math.sqrt(i));

    if(root *root === i && i % 2 === 0){
        // console.log(root)
    }
}