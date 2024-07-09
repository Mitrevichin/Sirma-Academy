function solve(arr, rotaions) {

    for (let i = 0; i < rotaions; i++) {
        let lastEl = arr.pop();

        arr.unshift(lastEl);
    }
    console.log(arr.join(' '));

}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
