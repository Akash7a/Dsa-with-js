// (1.) Find the maximum of three numbers
const findMax = (a = 3, b = 3, c = 3) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        console.error("Please enter valid numbers");
        return;
    }
    let max;

    if (a >= b && a >= c) {
        max = a;
        console.log("The maximum number is:" + max);
    } else if (b >= a && b >= c) {
        max = b;
        console.log("The maximum number is:" + max);
    } else if (a === b && b === c && c === a) {
        console.log("All numbers are equal");
    } else {
        max = c;
        console.log("The maximum number is:" + max);
    }
    return max;
}

// findMax(4, 4, 1);
// (2.) Check if a number is positive,negative or zero

const checkNumber = (num = 0) => {
    if (typeof num !== "number") {
        console.error("Please enter a valid number");
        return;
    }
    if (num > 0) {
        console.log("The number is positive : ", num);
    } if (num < 0) {
        console.log("The number is negative : ", num);
    } else if (num === 0) {
        console.log("The number is zero : ", num);
    }
}

// checkNumber(10)

// (3.) Calculate electricity bill 

const calculateElectricityBill = (units = 0) => {
    if (typeof units !== "number" || units < 0) {
        return { bill: 0, message: "Please enter a valid number of units" };
    }

    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 200) {
        bill = (100 * 5) + (units - 100) * 7;
    } else if (units <= 300) {
        bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
    } else {
        bill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
    }
    return {
        bill,
        message: `Your electricity bill is: ${bill}`
    };
};

// console.log(calculateElectricityBill(230));

// (4.) check if a charcater is vower or consonant 
const checkVowelOrConsonant = (char = "") => {

    if (typeof char !== "string") {
        console.error("Please enter a valid character");
        return;
    }

    char = char.trim().toLowerCase().charAt(0);

    if (char.length !== 1 && char !== "") {
        console.log("Please enter a single character");
        return;
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char)) {
        console.log(`${char} is a vowel`);
    }
    else if (/^[a-z]$/.test(char)) {
        console.log(`${char} is a consonant`);
    }
    else {
        console.log("Please enter a valid alphabet character");
    }
}

// checkVowelOrConsonant("a");

// (5.)Check if a year is a leap year

const checkLeapYear = (year = 0) => {
    if (typeof year !== "number" || year < 0) {
        console.error("Please enter a valid year");
        return;
    }
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
}

// checkLeapYear(2028);
