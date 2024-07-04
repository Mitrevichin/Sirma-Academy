function faceOfFigures(figure, a, b) {
    let face = 0;

    if (figure === 'square') {
        face = Math.pow(a, 2);
    } else if (figure === "rectangle") {
        face = a * b;
    } else if (figure === "triangle") {
        face = 0.5 * a * b;
    } else if (figure === "circle") {
        face = Math.PI * Math.pow(a, 2);
    }

    console.log(face.toFixed(2));
}

faceOfFigures("square", 5);
faceOfFigures("rectangle", 10, 3.5);
faceOfFigures("triangle", 4.5, 20);
faceOfFigures("circle", 10);
