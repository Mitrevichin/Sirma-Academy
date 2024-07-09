function solve(arr) {

    let arrNums = arr.map(x => Number(x));
    let firstNum = arrNums.shift();
    let lastNum = arrNums.pop();

    console.log(firstNum + lastNum);
}

solve(['20', '30', '40']);
solve(['10', '17', '22', '33']);
solve(['11', '58', '69']);
