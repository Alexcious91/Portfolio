// document.getElementById("lefteye").style.background = "purple";
// document.getElementById("body").style.border = "2px solid #000";
// document.getElementById("mouth").style.borderRadius = "50px";
// document.getElementById("righteye").style.border = "4px dotted yellow";
// document.getElementById("leftarm").style.background = "#FF00FF";
// document.getElementById("body").style.background = "#FF0000";
// document.getElementById("head").style.borderTop = "10px solid #000";

// // Activity
// document.getElementById("head").style.transform = "rotate(20deg)";
// document.getElementById("head").style.transform = "rotate(-20deg)";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.background = "green";
// document.getElementById("mouth").style.background = "pink";

// let rightEye = document.getElementById("righteye");
// rightEye.addEventListener("click", moveUpDown);
// let leftEye = document.getElementById("lefteye");
// leftEye.addEventListener("click", moveUpDown);
// let nose = document.getElementById("nose");
// nose.addEventListener("click", moveNoseUpDown);

// Left arm
// let leftArm = document.getElementById("leftarm");
// leftArm.onclick = moveRightLeft;


// function moveUpDown(e) {
//     let robotPart = e.target;
//     let top = 0;

//     let animation = setInterval(frame, 50) // animate every 10ms

//     function frame() {
//         robotPart.style.top = top + '%';
//         top++

//         if (top === 20) {
//             clearInterval(animation)
//         }
//     }
// }



// nose function
// function moveNoseUpDown(event) {
//     let robotPart = event.target;
//     let top = 0;

//     let animation = setInterval(frame, 30) // animate every 10ms

//     function frame() {
//         robotPart.style.top = top + '%';
//         top++

//         if (top === 50) {
//             clearInterval(animation)
//         }
//     }
// }


// left arm function

// function moveRightLeft(event) {
//     let robotPart = event.target;
//     let left = 0;

//     let animation = setInterval(frame, 30) // animate every 10ms

//     function frame() {
//         robotPart.style.left = left++ + '%';
//         if (left === 66) {
//             clearInterval(animation)
//         }
//     }
// }

// let leftArmCup = document.getElementById("cup");
// leftArmCup.addEventListener("click", throwSodaUp);

// function throwSodaUp(e) {
//     let robotPart = e.target;
//     let top = -500;

//     let animation = setInterval(frame, 1);

//     function frame() {
//         robotPart.style.top = top++ + "%";
//         if (top === -20) {
//             clearInterval(animation);
//         }
//     }
// } 