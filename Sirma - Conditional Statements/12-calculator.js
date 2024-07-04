function calculator(a, b, operator) {
    let result;

    if (operator === 'add') {
        result = a + b;
    } else if (operator === 'subtract') {
        result = a - b;
    } else if (operator === 'divide') {
        result = a / b;
    } else if (operator === 'multiply') {
        result = a * b;
    }
    console.log(result);
}

calculator(5, 5, 'add');
calculator(10, 12, "subtract");
calculator(9, 3, "divide");
calculator(5, 2, "divide");
calculator(3.1, 0.1, "multiply");
