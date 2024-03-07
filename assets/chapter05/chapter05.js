let itemOne;
let itemTwo;
let itemThree;

document.getElementById("btnChange").onclick = updateList;

function updateList() {
    document.getElementById("firstThing").innerHTML = prompt("Enter the first thing:");
    document.getElementById("secondThing").innerHTML = prompt("Enter the second thing:");
    document.getElementById("thirdThing").innerHTML = prompt("Enter the third thing::");
}

