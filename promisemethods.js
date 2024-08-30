//.then,.catch method
// const rand = new Promise((resolve,reject)=>{
//     let num = Math.random();
//     num>0.5 ? resolve(num):reject("error");
// })
// rand
// .then((result)=>{
//     console.log("Promise is Resolved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

//promise chaining

// function getEvenNumber(value,delay){
//         return new Promise ((resolve,reject)=>{
//             setTimeout(() => {
//                 value%2==0 ? resolve(`${value} is Even`):reject("number is not Even")
//             }, delay);
//         })
// }
// getEvenNumber(2,2000)
// .then((result)=>{
//     console.log(result);
//     return getEvenNumber(7,2000)
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

//Promise All
//resolve only

// function fun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = [1,2,3];
//       resolve("data is resolved in fun1: "+data);
//     }, 500);
//   });
// }
// function fun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = [4,5,6];
//       resolve("data is resolved in fun2: "+data);
//     }, 1000);
//   });
// }
// function fun3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = [7,8,9];
//       resolve("data is resolved in fun3: "+data);
//     }, 1500);
//   });
// }

// Promise.all([fun1(),fun2(),fun3()])
// .then ((result)=>{
//     console.log(result);    
// })
// .catch((error)=>{
//     console.log(error);
    
// })

//promise all with reject(one reject ? Allwill be rejected)

// 

//Promise Race(first setteled promise{resolve or reject} )

// function one() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("one")
//         }, 500);
//     })
// }
// function two() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("two")
//         }, 1500);
//     })
// }
// function three() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("three")
//         }, 1000);
//     })
// }

// Promise.race([one(),two(),three()])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

//Promise Any(first resolve will be shown)

// function one() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("First Message")
//         }, 500);
//     })
// }
// function two() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("Second Message")
//         }, 1000);
//     })
// }
// function three() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Third Message")
//         }, 1500);
//     })
// }

// Promise.any([one(),two(),three()])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

//Promise settle(first promise will be executed (if resolve value will be shown ,if reject reason will be shown))

function one() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("First Message")
        }, 500);
    })
}
function two() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Second Message")
        }, 1000);
    })
}
function three() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Third Message")
        }, 1500);
    })
}

Promise.allSettled([one(),two(),three()])
.then((result)=>{
    result.forEach((result)=>{
        result.status==="fulfilled"?console.log(result.value): console.log(result.reason);

    })    
})
.catch((error)=>{
    console.log(error);
    
})