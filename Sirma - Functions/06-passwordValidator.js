function passWordValidator(pass) {
    let isValid = true;

    if (!checkCharacters(pass)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!checkLettersAndDigits(pass)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!hasAtLeastTwoDigits(pass)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid.");
    }

    function checkCharacters(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function checkLettersAndDigits(pass) {
        for (let i = 0; i < pass.length; i++) {
            let charCode = pass.charCodeAt(i);
            // Check if the character is a letter (a-z or A-Z) or a digit (0-9)
            if (!((charCode >= 48 && charCode <= 57) ||    // 0-9
                (charCode >= 65 && charCode <= 90) ||    // A-Z
                (charCode >= 97 && charCode <= 122))) {  // a-z
                return false;
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits(pass) {
        let digitCount = 0;
        for (let i = 0; i < pass.length; i++) {
            let charCode = pass.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) digitCount++;
        }
        return digitCount >= 2;
    }
}

passWordValidator('pass');
passWordValidator('APass123');
passWordValidator('Pa$s$s');     
