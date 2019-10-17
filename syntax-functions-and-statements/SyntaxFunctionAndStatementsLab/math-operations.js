function solve(x, y, operator) {
    return eval(`${x}${operator}${y}`)
}

console.log(solve(5, 6, "+"));

function solve2(operator, ...params) {
    return params
        .reduce((a, b) => eval(`${a} ${operator} ${b}`), params.shift());
}

console.log(solve2("+", 10, 5, 1, -4));

const operationsMap = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
}

function solve3(operator, ...params) {
    return params
        .reduce(
            (a, b) => operationsMap[operator](
                a, Number(b)
            ), 
            Number(params.shift())
        );
}

console.log(solve3("+", 10, 5, 1, -4));
