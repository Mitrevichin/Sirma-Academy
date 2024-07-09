function solve(num) {

    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    num >= 1 && num <= 7 ? console.log(days[num - 1]) : console.log('Invalid day');;
};

solve(0);
solve(1);
solve(7);