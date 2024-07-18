function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return function (x) {

        const resultOfF = f(x);
        const resultOfG = g(resultOfF);

        return resultOfG;
    };
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3));
