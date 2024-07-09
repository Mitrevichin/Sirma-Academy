function solve(arr) {

    let firstBiggestEl = arr.shift();
    let newArr = [firstBiggestEl];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= firstBiggestEl) {
            newArr.push(arr[i]);
            firstBiggestEl = arr[i];
        }
    }
    console.log(newArr.join(' '));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
