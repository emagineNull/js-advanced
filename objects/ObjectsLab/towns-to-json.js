const isNotEmptyStr = x => x !== "";
const trimMyStrings = x => x.trim();
const parseIfNumber = x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x;

function extractKeys(str) {
    return str
        .split("|")
        .filter(isNotEmptyStr)
        .map(trimMyStrings)
        .map(parseIfNumber)
}

function solve(data) {
    let keys = extractKeys(data[0]);
    return data
        .slice(1)
        .map(extractKeys)
        .map(x => x.reduce((res, val, i)=> {
            res[keys[i]] = val;
            return res;
        }, {}));
}

console.log(
    solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
    )
);

console.log(solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));