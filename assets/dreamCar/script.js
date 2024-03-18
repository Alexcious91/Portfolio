// const dreamCar = {
//     make: prompt("Make:"),
//     model: prompt("Model:"),
//     color: prompt("Color:"),
//     year: prompt("Year:"),
//     price: prompt("Price in " + prompt("Currency:")),
// };

const dreamCar = {
    make: "VW",
    model: "GOLF 6 TSI", 
    color: "#ccc",
    year: 2018,
    price: "330 000"
}

document.getElementById("pricetag").innerHTML = `R${dreamCar.price}`;

document.getElementById("modelyear").innerHTML = dreamCar.year;

document.getElementById("body").style.backgroundColor = dreamCar.color;

document.body.innerHTML += dreamCar.make + " " + dreamCar.model;

console.log(dreamCar.price)