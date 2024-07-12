
//   let arr = ["1","2","3","4"];
//   for(let i=1;i<=arr.length;i++){
//     for(let j=1;j<=i;j++){
//     if(arr[i]==j){
//      arr+="*";   
//     }
//     }
//     console.log(arr);
    
//   }

const Missing = function(n) {
    let tmp = 1;
    let found = true;
    
    while (found) {
        found = false;
        
        for (let i = 0; i < n.length; i++) {
            if (n[i] === tmp) {
                found = true;
                tmp++;
                break;
            }
        }
    }
    
    console.log(tmp);
};

Missing([1,2,4,0,-1]);




  
