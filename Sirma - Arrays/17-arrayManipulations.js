function manipulateArray(input) {
    let array = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [action, ...args] = input[i].split(' ');

        if (action === 'Add') {
            array.push(Number(args[0]));
        } else if (action === 'Remove') {
            array = array.filter(num => num !== Number(args[0]));
        } else if (action === 'RemoveAt') {
            array.splice(Number(args[0]), 1);
        } else if (action === 'Insert') {
            array.splice(Number(args[1]), 0, Number(args[0]));
        }
    }

    console.log(array.join(' '));
}

manipulateArray(["4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]);
