//using Callback

// function fetchuserdata(callback){
//     setTimeout(() => {
//         console.log("user data fetched");
//         callback({ userid: 1 });
//     }, 1000);
// }

// function fetchuserorder(userdata, callback){
//     setTimeout(() => {
//         console.log(`user order fetched for user ${userdata.userid}`);
//         callback("order1, order2");
//     }, 2000);
// }

// function sendconformation(order, callback){
//     setTimeout(() => {
//         console.log(`confirmation mail sent for orders: ${order}`);
//         callback("mail sent");
//     }, 3000);
// }

// fetchuserdata(function(userdata) {
//     fetchuserorder(userdata, function(order) {
//         sendconformation(order, function(message) {
//             console.log(message);
//         });
//     });
// });

//using promise(then and catch)

// function fetchuserdata(){
//    return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("user data fetched");
//             resolve({userid:1})
//         }, 1000);  
//     })   
// }
// function fetchuserorder(userdata){
//     return new Promise((resolve) => {
//          setTimeout(() => {
//              console.log(`user order fetched ${userdata.userid}`);
//              resolve("order1,oredr2")
//          }, 2000);  
//      })   
//  }
//  function sendconformation(order){
//     return new Promise((resolve) => {
//          setTimeout(() => {
//              console.log(`confirmation mail send ${order}` );
//              resolve("mail sent")
//          }, 1000);  
//      })   
//  }
// fetchuserdata()
// .then(userdata=>fetchuserorder(userdata))
// .then(order=>sendconformation(order))
// .then(message=>console.log(message))
// .catch(error=>console.error(error))
