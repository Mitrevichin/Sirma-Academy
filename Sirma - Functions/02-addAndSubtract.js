function solve(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }

    let sumResult = sum(num1, num2);

    function subtract(sumResult, num3) {
        return sumResult - num3;
    }

    let finalResult = subtract(sumResult, num3);
    console.log(finalResult);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);