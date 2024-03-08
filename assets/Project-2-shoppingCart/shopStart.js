var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

// function to add item to the cart
function addSelection(x) {
    quantities[x] = quantities[x] + 1; // Increment quantity value
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x]; // Update total prices

    display_all();
}

// function to remove item from the cart
function removeSelection(x) {
    // If selected item quantity is greater than 0 do operations
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1; // Decrement quantity value
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x]; // Update total prices

        display_all();
    }
}

// Get total prices of items
function getTotal() {
    console.log(`Total amount: ${totalOrderAmt.toFixed(2)}`);
    let totalElement = document.getElementById("total").innerHTML = totalOrderAmt.toFixed(2);
    return totalElement;
}

// Reveal cart items when page load
function display_all() {
    var myTable = "<table class='table-bordered'><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";

    // Iterate through each items in cart
    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button id='add' onclick='addSelection(" + i + ")'>Add</button></td>";
        myTable += "<td><button id='remove' onclick='removeSelection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";


    // Checkout button when pressed display 
    myTable += "<br><br><button onclick='getTotal()'>Checkout</button>"
    document.getElementById("demo").innerHTML = myTable;
}

// Display cart when page load
window.onload = function () {
    display_all();
}