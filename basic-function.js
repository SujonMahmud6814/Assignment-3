function kilometerToMeter(inputNumber) {
    if (typeof inputNumber !== "number") {
        return "This is not a number.";
    } else if (inputNumber < 0) {
        return "Length can not negative number.";
    } else return inputNumber * 1000;
}

function budgetCalculator(
    watchQuantity = 0,
    mobileQuantity = 0,
    laptopQuantity = 0
) {
    var totalPrice = 0;
    var perWatchPrice = 50;
    var perMobilePrice = 100;
    var perLaptopPrice = 500;

    if (
        typeof watchQuantity !== "number" ||
        typeof mobileQuantity !== "number" ||
        typeof laptopQuantity !== "number"
    ) {
        return "Please enter any positive number of quantity";
    } else if (watchQuantity < 0 || mobileQuantity < 0 || laptopQuantity < 0) {
        return "Quantity can not negative number.";
    } else
        totalPrice =
            watchQuantity * perWatchPrice +
            mobileQuantity * perMobilePrice +
            laptopQuantity * perLaptopPrice;

    return totalPrice;
}

function hotelCost(days) {
    var totalCost = 0;

    if (typeof days !== "number") {
        return "This not a number.";
    } else if (days < 0) {
        return "Day can not negative number.";
    } else if (days > 0 && days <= 10) {
        totalCost = days * 100;
        return totalCost;
    } else if (days >= 11 && days <= 20) {
        totalCost = (days - 10) * 80 + 1000;
        return totalCost;
    } else totalCost = (days - 20) * 50 + 1800;

    return totalCost;
}

function megaFriend(array) {
    var temp = "";
    for (var i = 0; i <= array.length - 1; i++) {
        if (array[i].length >= temp.length) {
            temp = array[i];
        }
    }
    return temp;
}
