function progressBar(num) {

    let numberOfSymbols = num / 10;
    let symbol = '%';
    let dot = '.';
    let symbolsTemplate = symbol.repeat(numberOfSymbols);
    let dotsTemplate = dot.repeat(10 - numberOfSymbols);

    if (num < 100) {
        console.log(`${num}% [${symbolsTemplate}${dotsTemplate}]`);
        console.log('Loading...');
    } else {
        console.log(`[${symbolsTemplate}]`);
        console.log('Complete!');
    }
}

progressBar(10);
progressBar(70);
progressBar(100);