function getPrice(vegetable, day, quantity) {
    const isWorkDay = day === 'Monday'
        || day === 'Tuesday'
        || day === 'Wednesday'
        || day === 'Thursday';

    let singlePrice;

    if (!vegetable || !day) console.log('error');

    switch (vegetable) {
        case 'tomato':
            isWorkDay ? singlePrice = 2.5 : singlePrice = 2.8;
            break;
        case 'onion':
            isWorkDay ? singlePrice = 1.2 : singlePrice = 1.3;
            break;
        case 'lettuce':
            singlePrice = 0.85;
            break;
        case 'cucumber':
            isWorkDay ? singlePrice = 1.45 : singlePrice = 1.75;
            break;
        case 'pepper':
            isWorkDay ? singlePrice = 5.50 : singlePrice = 3.50;
            break;
        default: console.log('error');
            break;
    }

    const totalPrice = singlePrice * quantity;

    console.log(totalPrice.toFixed(2));
}

getPrice("tomato", "Tuesday", 2);
getPrice("onion", "Sunday", 3);
getPrice("pepper", "Monday", 10);
getPrice("banana", "Friday", 5);
