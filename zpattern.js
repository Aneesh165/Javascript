// function pattern(n){
//     for(let row=1;row<=n;row++){
//         let arr=" ";
//         for(let col=1;col<=n;col++){
//             if(row==1||row==n||row==col){
//             arr +="*";
//         }
//         else{
//             arr +=" ";
//         }
//     }
//     console.log(arr);
// }
// }
// pattern(5);

function Pattern(n) {
  for (let row = 1; row <= n; row++) {
    let arr = "";
    for (let col = 1; col <= n; col++) {
      if (row==1||row==n||row + col == n+1 ) {
        arr += "*";
      } else {
        arr += " ";
      }
    }
    console.log(arr);
  }
}

Pattern(5);
