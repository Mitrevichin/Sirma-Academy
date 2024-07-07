function solve(start, end, magicNumber) {

    let combinationCount = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationCount++;
            if ((i + j) === magicNumber) {
                console.log(`Combination ${combinationCount} - (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);

};

solve(1, 10, 5);
solve(23, 24, 20);
solve(1, 2, 3);
