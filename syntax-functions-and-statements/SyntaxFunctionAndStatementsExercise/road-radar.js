const limits = {
    "motorway": 130,
    "interstate": 90,
    "city": 50,
    "residential": 20
}

function solve(a) {
    let speed = a[0];
    let place = a[1];
    
    let speedLimit = limits[place];
    if (speed - speedLimit <= 0) {
        console.log();
    }
    else if (speed - speedLimit <= 20) {
        console.log("speeding");
    }
    else if (speed - speedLimit <= 40) {
        console.log("excessive speeding");
    }
    else {
        console.log("reckless driving");
    }
}

solve([40, 'city']);
solve([21, "residential"]);
solve([120, "interstate"]);
solve([200, "motorway"]);
