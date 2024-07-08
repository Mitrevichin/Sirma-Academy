function solve(name, surName, eyeColour) {

    let obj = {
        name,
        surName,
        eyeColour,
    }

    let json = JSON.stringify(obj);
    console.log(json);
}

solve("Ivan", "Ivanov", "blue"
);