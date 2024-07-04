function gradeCalculator(grade) {
    let output;

    if (grade >= 90 && grade <= 100) {
        output = 'A';
    } else if (grade >= 80 && grade <= 89) {
        output = 'B';
    } else if (grade >= 70 && grade <= 79) {
        output = 'C';
    } else if (grade >= 60 && grade <= 69) {
        output = 'D';
    } else {
        output = 'F';
    }
    console.log(output);
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);
