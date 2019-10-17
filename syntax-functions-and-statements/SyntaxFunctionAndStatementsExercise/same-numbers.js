function solve(a) {
    let toStr = a.toString();
    var areSame = true;
    for (let i = 0; i < toStr.length - 1; i++) {
        if (toStr[i] !== toStr[i + 1]) {
            areSame = false;
            break;
        }
    }
    var sum = 0;
    for (let i = 0; i < toStr.length; i++) {
        sum += Number(toStr[i]);
    }

    console.log(areSame);
    console.log(sum);
}

solve(1234);

function solve2(input) {
    input = String(input);
    let result = true;
    let sum = 0;
 
    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++) {
        sum += +input[i];
 
        if (input[i] !== firstDigit) {
            result = false;
        }
    }
 
    console.log(result);
    console.log(sum);
}

solve2(2222222);
