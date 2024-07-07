function solve(numberOfFloors, numberOfRoomPerFloor) {
    for (let f = numberOfFloors; f > 0; f--) {
        let floor = '';

        for (let a = 0; a < numberOfRoomPerFloor; a++) {
            let type;
            let isLastFloor = f === numberOfFloors;

            if (isLastFloor) {
                type = 'L'
            } else if (f % 2 === 0) {
                type = 'O'
            } else {
                type = 'A'
            }

            floor += type + f + a + ' ';
        }

        console.log(floor.trim());
    }
}

solve(6, 4);
solve(3, 3);
solve(4, 4);
