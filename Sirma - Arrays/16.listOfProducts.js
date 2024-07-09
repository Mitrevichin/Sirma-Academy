function solve(arr) {

    let sorted = arr.sort((a, b) => a.localeCompare(b));
    sorted.forEach((x, i) => console.log(`${i + 1}.${x}`));

}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);