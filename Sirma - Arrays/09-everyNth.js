function solve(array, step) {
    let newCollection = [];

    for (let index = 0; index < array.length; index += step) {
        const element = array[index];
        newCollection.push(element);
    }
    console.log(newCollection);
}

solve(['5', '15', '31', '14', '20'], 2);
solve(['dsa', 'asd', 'demo', 'test'], 2);
solve(['1', '2', '3', '4', '5'], 6);
