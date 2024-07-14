function factorial(n) {
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

function calculateDivisionAndFormat(num1, num2) {
    let result1 = factorial(num1);
    let result2 = factorial(num2);
    let division = (result1 / result2).toFixed(2);
    console.log(division);
}

calculateDivisionAndFormat(5, 2);
calculateDivisionAndFormat(6, 2); 
