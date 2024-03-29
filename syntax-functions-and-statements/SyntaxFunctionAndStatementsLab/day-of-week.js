const daysMap = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
}

function solve(d) {
    return daysMap[d] ? daysMap[d] : "error";
}

console.log(
    solve("Monday"), 
    solve("Friday"), 
    solve("Invalid"),
    solve("Wednesday")
);
