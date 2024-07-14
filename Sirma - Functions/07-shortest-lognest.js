function findShortestAndLongestWord(sentence) {
    let cleanedSentence = '';

    for (let i = 0; i < sentence.length; i++) {
        let charCode = sentence.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
            cleanedSentence += sentence[i];
        }
    }

    let words = cleanedSentence.split(' ').filter(word => word.length > 0);

    let shortestWord = words[0];
    let longestWord = words[0];

    // Iterate through words to find the shortest and longest
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    console.log(`Longest -> ${longestWord}\nShortest -> ${shortestWord}`);
}

findShortestAndLongestWord('Hello how are you today? I hope you are fine ');
findShortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');