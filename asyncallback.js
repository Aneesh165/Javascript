// function person(name,callback){
// let c=console.log("Hello I am :"+name)
// callback(c);
// }
// function message() {
//     console.log("Nice to meet you");
// }
// person("Aneesh",message)


function fetchdata(userId,callback){
 const users={1:{id:1,name:"aneesh",place:"calicut"},
              2:{id:2,name:"john",place:"kollam"}
             }
    let user=users[userId];

    if(user){
        callback(null,user)
    }
    else{
        console.log("User not found"); 
    }
}
function one(err,user){

    if(err){
        console.log(err);
    }
    else{
        console.log(user);   
    }
}
fetchdata(3,one)