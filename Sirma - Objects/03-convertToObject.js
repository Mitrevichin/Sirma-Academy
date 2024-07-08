function solve(jsonObj) {

    let obj = JSON.parse(jsonObj);
    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }

    let person = { colorEyes: 'blue' };
    console.log(person[colorEyes]);

}

solve('{"name": "Ivan", "age": 40, "town": "Sofia"}');
console.log('-----------------------------------------');
solve('{"firstName": "Ivan", "lastName": "Ivanov"}');