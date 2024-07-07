function solve(num) {

    let numAsStr = num.toString();
    let power = String(num).length;
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let curDigit = Number(numAsStr[i]);
        sum += Math.pow(curDigit, power);
    };
    console.log(num === sum ? 'Armstrong' : 'Not Armstrong');
}

solve(153);
solve(370);
solve(123);
solve(407);
solve(1634);
