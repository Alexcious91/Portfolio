const dreamCar = {
    make: prompt("Make:"),
    model: prompt("Model:"),
    color: prompt("Color:"),
    year: prompt("Year:"),
    price: prompt("Price in " + prompt("Currency:")),
};

document.getElementById("pricetag").innerHTML = "Price: " + dreamCar.price;

document.getElementById("model").innerHTML = "Year: " + dreamCar.year;

document.body.style.backgroundColor = dreamCar.color;

document.body.innerHTML = dreamCar.make + " " + dreamCar.model;
