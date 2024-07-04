function address(age, gender) {
    switch (gender) {
        case 'f':
            if (age < 16) {
                console.log('Miss');
            } else {
                console.log('Ms.');
            }
            break;
        case 'm':
            if (age < 16) {
                console.log('Master');
            } else {
                console.log('Mr.');
            }
            break;
    }
}

address(14, "f");
address(17, "m");
address(10, "m");
address(32, "f");
