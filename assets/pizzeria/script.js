// Listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * Gets form values, calculates prices, and produces output
 */
function placeOrder() {
    // Get form values
    let numPizzas = parseInt(document.getElementById("numOfPizzas").value);
    let typePizza = document.getElementById("typeOfPizzas").value;
    let deliveryCity = document.getElementById("deliveryCity").value;

    // Check if numPizzas is a valid number
    if (isNaN(numPizzas)) {
        alert("Please enter a valid number of pizzas.");
        return;
    }

    // Get the pizza price
    let orderPrice = calculatePrice(numPizzas, typePizza);

    // Get the delivery price
    let deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

    let result = "<p>Thank you for your order.</p>";

    if (deliveryPrice === 0) {
        result += "<p>You get free delivery!</p>";
    } else {
        result += "<p>Your delivery cost is: $" + deliveryPrice + "</p>";
    }
    result += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>";

    document.getElementById("displayTotal").innerHTML = result;
}

function calculatePrice(numPizzas, typePizza) {
    let orderPrice = parseInt(numPizzas) * 10;
    let extraCharge = 0;

    // Calculate extraCharge, if there is one.
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 4;
        orderPrice += extraCharge;
    }
    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity) {
    let deliveryPrice = 10;

    // Calculate delivery price, if there is one
    if (deliveryCity === "midrand" && orderPrice > 10) {
        deliveryPrice = 0;
    }

    return deliveryPrice;
}
