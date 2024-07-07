function solve() {

    for (let index = 1; index <= 1000; index++) {
        let isEndingIn7 = index % 10 === 7;
        if (isEndingIn7) console.log(index);
    }

}

solve();