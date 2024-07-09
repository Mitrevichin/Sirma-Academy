function solve(arr) {

    while (arr.length > 1) {

        let condensedArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let sum = arr[i] + arr[i + 1];
            condensedArr.push(sum);
        }
        arr = condensedArr;
    }
    console.log(arr[0]);
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
