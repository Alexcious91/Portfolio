let daysOfTheWeek =  prompt("Enter your favourite day of the week");
let response;

switch(daysOfTheWeek.toLowerCase()) {
    case "monday": 
        response = "It's Monday";
        break;
    case "tuesday":
        response = "It's Tuesday";
        break;
    case "wednesday":
        response = "It's Wednesday";
        break;
    case "thursday": 
        response = "It's Thursday";
        break;
    case "friday":
        response = "It's Friday"
        break;
    default:
        response = "I haven't heard of that one";
        break;
}

alert(response);
