const numberInWords = function (num) {
    let word;

    switch (num) {
        case 0:
            word = 'zero';
            break;
        case 1:
            word = 'one';
            break;
        case 2:
            word = 'two';
            break;
        case 3:
            word = 'three';
            break;
        case 4:
            word = 'four';
            break;
        case 5:
            word = 'five';
            break;
        case 6:
            word = 'six';
            break;
        case 7:
            word = 'seven';
            break;
        case 8:
            word = 'eight';
            break;
        case 9:
            word = 'nine';
            break;

        default: word = 'too big';
            break;
    }
    console.log(word);
}

numberInWords(7);
numberInWords(5);
numberInWords(10);