function solve(str) {

    let reversedWord = '';

    let i = str.length - 1;
    while (i >= 0) {
        reversedWord += str[i];
        i--;
    }

    console.log(str === reversedWord ? 'true' : 'false');

    // Sotulion with methods
    // let reversedWord = str.split('').reverse().join('');
    // console.log(str === reversedWord ? 'true' : 'false');
}

solve("radar");
solve("hello");
solve("racecar");
solve("java");
solve("madam");
