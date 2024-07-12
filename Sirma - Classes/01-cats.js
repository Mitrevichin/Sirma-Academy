class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

function processCatData(catDataArray) {
    for (let catData of catDataArray) {

        let [name, age] = catData.split(' ');

        let cat = new Cat(name, age);

        cat.meow();
    }
}

const input = ['Mellon 2', 'Tom 3'];
processCatData(input);


