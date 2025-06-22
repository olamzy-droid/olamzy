function plotprices(prices) {
    let newprices = [];

    for (let i = 0; i < prices.length; i++) {
        newprices.push(prices[i]+10);
    }

    return newprices;
}


let prices = [20, 25, 30, 35];
let newPrice = plotprices(prices);

console.log(newPrice);