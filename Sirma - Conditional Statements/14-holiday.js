function vacation(destinationBudget, season) {
    let destination = "";
    let typeOfHoliday = "";
    let amountSpent = 0;

    if (destinationBudget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            typeOfHoliday = "Camp";
            amountSpent = (0.3 * destinationBudget).toFixed(2);
        } else if (season === "winter") {
            typeOfHoliday = "Hotel";
            amountSpent = (0.7 * destinationBudget).toFixed(2);
        }
    } else if (destinationBudget <= 1000) {
        destination = "Europe";
        if (season === "summer") {
            typeOfHoliday = "Camp";
            amountSpent = (0.4 * destinationBudget).toFixed(2);
        } else if (season === "winter") {
            typeOfHoliday = "Hotel";
            amountSpent = (0.8 * destinationBudget).toFixed(2);
        }
    } else {
        destination = "Asia";
        typeOfHoliday = "Hotel";
        amountSpent = (0.9 * destinationBudget).toFixed(2);
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfHoliday} - ${amountSpent}`);
}

vacation(50, "summer");
vacation(75, "winter");
vacation(312, "summer");
vacation(678.53, "winter");
vacation(1500, "summer");


vacation(50, "summer");
vacation(75, "winter");
vacation(312, "summer");
vacation(678.53, "winter");
vacation(1500, "summer");
