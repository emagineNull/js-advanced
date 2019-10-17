function solve(a, b, c) {
    return `The largest number is ${[a, b, c]
        .sort((a, b) => a - b).pop()}.`
}

console.log(solve(5, -3, 16));

function solve2(a, b, c) {
    return `The largest number is ${Math.max(a, b, c)}.`
}

console.log(solve2(5, -3, 16));
