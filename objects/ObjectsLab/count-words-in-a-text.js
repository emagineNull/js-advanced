function solve(str) {
    let data = str.match(/\w+/gim);
    let obj = {};

    for (let i = 0; i < data.length; i++) {
        if (typeof obj[data[i]] === "undefined") {
            obj[data[i]] = 0;
        }
        obj[data[i]]++;
    }

    return obj;
}

console.log(
    solve('JS devs use Node.js for server-side JS.-- JS for devs')
)

function addPropIfMissing(a, b) {
    if (typeof a[b] === "undefined") {
        a[b] = 0;
    }
    return a;
}

function solve2(str) {
    return str
        .match(/\w+/gim)
        .reduce((a, prop) => {
            addPropIfMissing(a, prop);
            a[b]++;
            return a;
        }, {});
}

console.log(
    solve2('JS devs use Node.js for server-side JS.-- JS for devs')
)