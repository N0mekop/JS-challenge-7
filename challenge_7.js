'use strict';

const bills = [125, 555, 44];
const tips = [];

const calcTip = (addition) => {
    return addition > 50 && addition <= 300 ? addition * 0.15 : addition * 0.20;
}

bills.push(100);

console.log('Pour ' + bills[3], 'le pourboire est de ' + calcTip(bills[3]));

for (let i = 0; i < bills.length; i++) {
    let tips = calcTip(bills[i]);
}

console.log(tips);

const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(totals);
