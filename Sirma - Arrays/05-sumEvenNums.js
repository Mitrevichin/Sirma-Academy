function solve(arr) {
    // let sum = 0;

    // let arrNums = arr.map(x => Number(x));
    // for (num of arrNums) {
    //     if (num % 2 === 0) {
    //         sum += num;
    //     }
    // }
    // console.log(sum);

    let evenNums = arr
        .filter(x => x % 2 === 0)
        .reduce((acc, cur) => {
            let num = Number(cur);
            return acc + num;
        }, 0);
    console.log(evenNums);
}

solve(['1', '2', '3', '4', '5', '6']);
solve(['3', '5', '7', '9']);
solve(['2', '4', '6', '8', '10']);
