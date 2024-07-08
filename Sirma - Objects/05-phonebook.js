function solve(arr) {
    let obj = {};

    for (const info of arr) {
        let [name, number] = info.split(' ');

        if (!obj.hasOwnProperty(name)) {
            obj[name] = number;
        }
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

solve(["Maria 123",
    "Samantha 456",
    "Nicole 789",
    "Samantha 456",
    "Maria 123"]
);