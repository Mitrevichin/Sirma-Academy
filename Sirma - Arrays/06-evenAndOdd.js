function solve(arr) {

    let evenNums = 0;
    let oddNums = 0;

    arr.forEach(x => {
        if (x % 2 === 0) {
            evenNums += x;
        } else {
            oddNums += x;
        }
    });
    console.log(evenNums - oddNums);

}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
