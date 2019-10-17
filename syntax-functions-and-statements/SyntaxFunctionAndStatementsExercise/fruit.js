function solve(str, a, b) {
    let kilos = a / 1000;
    let price = b * kilos;
    console.log(`I need \$${price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${str}.`)
}

solve('apple', 1563, 2.35);
