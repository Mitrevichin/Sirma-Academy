function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {

    // let arrOfNums = [firstNum, secondNum, thirdNum];
    // console.log(Math.min(...arrOfNums));

    function smallerNum(firstNum, secondNum) {
        return firstNum < secondNum ? firstNum : secondNum;
    }

    let smaller = smallerNum(smallerNum(firstNum, secondNum), thirdNum);
    console.log(smaller);

}

smallestOfThreeNumbers(2, 5, 3);
