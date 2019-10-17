function solve(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result += arr[i] + ": ";
        }
        else {
            result += arr[i] + ", ";
        }
    }

    console.log(`{ ${result.substring(0, result.length - 2)} }`);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
