function solve(obj) {

    // for (const key in obj) {
    //     console.log(`${key} -> ${obj[key]}`);
    // }

    // for (const key of Object.keys(obj)) {
    //     console.log(`${key} -> ${obj[key]}`);
    // }

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }

}

solve({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
}
);