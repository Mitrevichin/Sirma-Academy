function solve(num) {

    // let numAsStr = String(num);
    // let oddSum = 0;
    // let evenSum = 0;

    // for (let i = 0; i < numAsStr.length; i++) {

    //     if (Number(numAsStr[i]) % 2 === 0) {
    //         evenSum += Number(numAsStr[i]);
    //     } else {
    //         oddSum += Number(numAsStr[i]);
    //     }
    // }

    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    let oddSum = 0;
    let evenSum = 0;

    num.toString().split('').forEach(x => {
        let num = Number(x);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);