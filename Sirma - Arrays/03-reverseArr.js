function solve(n, arr) {

    let newArr = arr.slice(0, n).reverse();
    console.log(newArr.join(' '));

    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(arr[i]);
    //     if (i === n - 1) break;
    // }

    // let reversedArr = [];
    // for (let i = newArr.length - 1; i >= 0; i--) {
    //     reversedArr.push(newArr[i]);
    // };

    // console.log(reversedArr.join(' '));

}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);