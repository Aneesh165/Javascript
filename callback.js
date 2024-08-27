let arr = (a,b,callback)=>{
    let c=a*b;
    callback("result is:"+c)
}
function result(d){
console.log(d)
}


arr(2,5,result);