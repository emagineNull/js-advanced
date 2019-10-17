const prices = {
    "coffee caffeine": 0.8,
    "coffee decaf": 0.9,
    "tea": 0.8
}

function solve(a) {
    let income = 0.0;
    for (let i = 0; i < a.length; i++) {
        let order = a[i].split(", ");
        let money = Number(order[0]);
        let type = "";
        if (order[1] === "coffee") {
            type = order[1] + " " + order[2];
        }
        else {
            type = order[1];
        }

        let price = prices[type];
        if (order.includes("milk")) {
            price += 0.1;
        }

        let sugar = Number(order[order.length - 1]);
        if (sugar > 0) {
            price += 0.1;
        }

        if (money - price >= 0) {
            let change = money - price;
            console.log(`You ordered ${order[1]}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
            income += price;
        }
        else {
            let needed = price - money;
            console.log(`Not enough money for ${order[1]}. Need $${needed.toFixed(2)} more.`)
        }
    }

    console.log(`Income Report: $${income.toFixed(2)}`)
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);