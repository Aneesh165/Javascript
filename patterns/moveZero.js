// let num = [0, 1, 2, 3, 0, 5, 0, 6];
// let n = num.length;
// let one = [];
// let two = [];
// for (let i = 0; i < n; i++) {
//     if (num[i] == 0) {
//         one += num[i];
//     } else {
//         two += num[i];
//     }
// }
// console.log(two + one);


//method2

// let num = [0, 1, 2, 3, 0, 5, 0, 6];
// let n = num.length;
// let one = [];
// let two = [];
// for (let i = 0; i < n; i++) {
//     if (num[i] == 0) {
//         one.push(num[i]);
//     } else {
//         two.push(num[i]);
//     }
// }
// console.log(two.concat(one));


//method 3

let num = [0, 1, 2, 3, 0, 5, 0, 6];

let one = num.filter(value => value === 0);
let two = num.filter(value => value !== 0);

console.log(two.concat(one));
