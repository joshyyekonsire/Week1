///////////////////
console.log('APPLE ORCHARD');
console.log ('------------------------------------------------')
///////////////////
const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55
// PROBLEM 1
console.log ('PROBLEM 1');
console.log ('------------------------------------------------')
//Fuji Loop to find the total
let totalFuji = 0;
for (i=0; i < fujiAcres.length; i++) {
    totalFuji += fujiAcres[i]
}
//Gala Loop to find the total
let totalGala = 0;
for (i=0; i < galaAcres.length; i++) {
    totalGala += galaAcres[i]
}
//Pink Loop to find total
let totalPink = 0;
for (i=0; i < pinkAcres.length; i++) {
    totalPink += pinkAcres[i]
}
//Total
let totalAcres = totalFuji + totalGala + totalPink;
//print answers
console.log(`Total Acres: ${totalAcres}`);
console.log ('------------------------------------------------')
// PROBLEM 2
console.log ('PROBLEM 2')
console.log ('------------------------------------------------')
let averageDailyAcres = totalAcres / 7;
console.log (`Average Daily Acres: ${averageDailyAcres}`);
console.log ('------------------------------------------------')
// PROBLEM 3
console.log ('PROBLEM 3');
console.log ('------------------------------------------------')
let acresLeft = 174 
let days = 0
while (acresLeft > 0) {
    days ++
    acresLeft -= averageDailyAcres
}
console.log(`Days: ${days}`);
console.log(`Acres Left: ${acresLeft}`);
console.log ('------------------------------------------------')
// PROBLEM 4
console.log ('PROBLEM 4');
console.log ('------------------------------------------------')
const fujiTons = [2*6.5, 3*6.5, 3*6.5, 2*6.5, 2*6.5, 2*6.5, 1*6.5]
const galaTons = [5*6.5, 2*6.5, 4*6.5, 3*6.5, 6*6.5, 2*6.5, 4*6.5]
const pinkTons = [1*6.5, 5*6.5, 4*6.5, 2*6.5, 1*6.5, 5*6.5, 4*6.5]
console.log(`Fuji Tons: ${fujiTons}`);
console.log(`Gala Tons: ${galaTons}`);
console.log(`Pink Tons: ${pinkTons}`);
console.log ('------------------------------------------------')
// PROBLEM 5
console.log ('PROBLEM 5');
console.log ('------------------------------------------------')
let fujiPounds = 97.5 * 2000;
let galaPounds = 169 * 2000;
let pinkPounds = 142.7 * 2000;
console.log(`Fuji Pounds: ${fujiPounds}`);
console.log(`Gala Pounds: ${galaPounds}`);
console.log(`Pink Pounds: ${pinkPounds}`);
console.log ('------------------------------------------------')
// PROBLEM 6
console.log ('PROBLEM 6');
console.log ('------------------------------------------------')
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;
console.log(`Fuji Profit: ${fujiProfit}`);
console.log(`Gala Profit: ${galaProfit}`);
console.log(`Pink Profit: ${pinkProfit}`);
console.log ('------------------------------------------------')
// PROBLEM 7
console.log ('PROBLEM 7');
console.log ('------------------------------------------------')
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log (`Total Profit: ${totalProfit}`);
console.log ('------------------------------------------------')