function numberInTheRange(num) {
    let standartNum = num >= -100
        && num <= 100
        && num !== 0;
    console.log(standartNum ? 'Yes' : 'No');
}

numberInTheRange(-25);
numberInTheRange(0);
numberInTheRange(25);
