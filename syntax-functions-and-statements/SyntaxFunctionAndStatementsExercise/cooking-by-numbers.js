const action = {
    'chop': a => a / 2,
    'dice': a => Math.sqrt(a),
    'spice': a => a += 1,
    'bake': a => a * 3,
    'fillet': a => a * 0.8
}

function solve(a) {
    let number = Number(a[0]);
    for (let i = 1; i <= 5; i++) {
        number = action[a[i]](number);
        console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);