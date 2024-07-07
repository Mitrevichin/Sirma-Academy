function solve(num) {
    let numAsStr = num.toString();
    let reverseNum = '';

    for (let i = numAsStr.length - 1; i >= 0; i--) {
        reverseNum += numAsStr[i];
    }
    console.log(Number(reverseNum));

    // Solution with methods
    // console.log(Number(num.toString().split('').reverse().join('')));
}

solve(123);
solve(9876);
solve(505);
solve(10203);
solve(7);
