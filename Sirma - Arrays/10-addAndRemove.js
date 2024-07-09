function solve(arrOfCommands) {
    let index = 1;
    let newArr = [];

    for (let command of arrOfCommands) {
        if (command === 'add') {
            newArr.push(index);
        } else if (command === 'remove') {
            newArr.pop();
        }
        index++;
    }

    newArr.length > 0 ? console.log(newArr.join(' ')) : console.log('Empty');
}


solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
