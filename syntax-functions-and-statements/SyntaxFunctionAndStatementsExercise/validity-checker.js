function solve(a) {
    let x1 = a[0];
    let y1 = a[1];
    let x2 = a[2];
    let y2 = a[3];

    let c1 = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
    let c2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    let c3 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    
    console.log(`{${x1}, ${y1}} to {0, 0} ${Number.isInteger(c1) ? 'is valid' : 'is invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${Number.isInteger(c2) ? 'is valid' : 'is invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${Number.isInteger(c3) ? 'is valid' : 'is invalid'}`);
}

solve([2, 1, 1, 1]);