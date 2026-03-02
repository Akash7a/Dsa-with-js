// (1.) Print Right-Angled Star Triangle Pattern

const printTriangle = (rows = 5) => {

    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            if (j <= i) {
                pattern += "*";
            }
        }
        console.log(pattern)
    }
}

// printTriangle(5)

// (2.) Print Inverted Right-Angled Star Triangle Pattern

const printInvertedTriangle = (rows = 5) => {

    for (let i = rows; i >= 1; i--) {
        let star = "";
        for (let j = i; j >= 1; j--) {
            if (j <= i) {
                star += "*";
            }
        }
        console.log(star)
    }
}
// printInvertedTriangle();

// (3.) print pyramid star pattern

const pyramidStarPattern = (rows = 5) => {

    for (let i = 1; i <= rows; i++) {
        let star = "";

        for (let s = 1; s <= rows - i; s++) {
            star += " ";
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            star += "*";
        }
        console.log(star)
    }
}
// pyramidStarPattern()

// (4.) print inverted pyramid star pattern
const invertedPyramidStarPattern = (rows = 5) => {

    for (let i = rows; i >= 1; i--) {
        let star = "";

        for (let s = 0; s < rows - i; s++) {
            star += " ";
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            star += "*";
        }

        console.log(star);
    }
}
// invertedPyramidStarPattern();

// (5.) print hollow square 
const printHollowSquare = (n = 5) => {
    for (let i = 1; i <= n; i++) {
        let stars = "";
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                stars += "*";
            } else {
                stars += " ";
            }
        }
        console.log(stars);
    }
}

// printHollowSquare();

// (6.) print hollow pyramid 

const printHollowPyramid = (rows = 5) => {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let s = 1; s <= rows - i; s++) {
            pattern += " ";
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            if (i === 1 || i === rows || j === 1 || j === (2 * i - 1)) {
                pattern += "*"
            } else {
                pattern += " ";
            }
        }
        console.log(pattern)
    }
}

// printHollowPyramid();

// (7.) Print alternating binary triangle 

const printBinary = (n = 5) => {
    for (let i = 1; i <= n; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += (i % 2 === 1 ? j % 2 : (j + 1) % 2);
        }
        console.log(pattern)
    }
}

printBinary()