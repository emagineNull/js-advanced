function solve(a, b) {
    var temp = 0;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(solve(2154, 458));
