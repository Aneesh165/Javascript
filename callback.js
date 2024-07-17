let arr = (a,b,callback)=>{
    let c=a*b;
    callback(c)
}
function result(d){
console.log(d)
}


arr(2,4,result);