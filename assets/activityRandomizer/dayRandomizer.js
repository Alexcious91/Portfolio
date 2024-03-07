alert("Welcome to activity day randomizer");

let userName = prompt("Enter your name: ");

const dayOfWeek = Math.floor(Math.random() * 7) + 1;

if (dayOfWeek === 1) {
    alert(`${userName}, Monday: Work on projects`);
} else if (dayOfWeek === 2) {
    alert(`${userName}, Tuesday: Go for a walk`);
} else if (dayOfWeek === 3) {
    alert(`${userName}, Wednesday: Read a book`);
} else if (dayOfWeek === 4) {
    alert(`${userName}, Thursday: Code and learn something new`);
} else if (dayOfWeek === 5) {
    alert(`${userName}, Friday: Relax and watch a movie`);
} else if (dayOfWeek === 6) {
    alert(`${userName}, Saturday: Outdoor activities`);
} else {
    alert(`${userName}, Sunday: Take a day off`);
}
