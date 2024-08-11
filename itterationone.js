products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
console.log('-------------------------------------------------------------')
//1. print product name only
console.log("Product Names:");

let productname =products.map((a)=>a.pName)
console.log(productname);

console.log('-------------------------------------------------------------')

//2. print all mobile details whose display is lcd
console.log("LCD Displays:");
let lcd = products.filter((a)=>a.display=="lcd")
console.log(lcd);

console.log('-------------------------------------------------------------')


//3. print 5g mobile phone name
console.log("5G Phones:");
let range=products.filter((a)=>a.band=="5g")
console.log(range);

console.log('-------------------------------------------------------------')
//4. filter mobile based on price
console.log("Price Range:");
let costly=products.sort((a,b)=>a.price-b.price)
console.log(costly)
console.log('--------------------------------------------------------------');

//5. print costly mobile
console.log("costly Mobile");
let top=products.reduce((a,b)=>a.price>b.price?a:b)
console.log(top);

console.log('---------------------------------------------------------------')

//6. print low cost mobile
console.log("Low Cost Mpbile");
let low=products.reduce((a,b)=>a.price<b.price?a:b)
console.log(low);


console.log('---------------------------------------------------------------');
