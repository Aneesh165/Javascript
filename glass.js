// function glass(n) {

//     for(let row=0;row<n;row++){
//         let result =" ";
//         for(let col=0;col<row+1;col++){
//             result +=" ";
//         }
//         for(let col=1;col<=n-row;col++){
//             result +="*";
//         }
//         for(let col=1;col<=n-row;col++){
//             result +="*";
//         }
//         console.log(result);
//     }

//     for(let row=0;row<n;row++){
//         let result =" ";
//         for(let col=0;col<n-row;col++){
//             result +=" ";
//         }
//         for(let col=0;col<=row;col++){
//             result +="*";
//         }
//         for(let col=0;col<=row;col++){
//             result +="*";
//         }
//         console.log(result);
//     }
// }

// glass(5);

function pyramid(rows) {
  for (i = 0; i <= rows; i++) {
    let str = "";
    for (s = 1; s <= i; s++) {
      str += " ";
    }
    for (j = 0; j <= rows - i; j++) {
      str += " *";
    }
    console.log(str);
  }
  for (i = 1; i <= rows; i++) {
    let str = "";
    for (s = 0; s <= rows - i; s++) {
      str += " ";
    }
    for (j = 1; j <= i + 1; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

pyramid(4);
