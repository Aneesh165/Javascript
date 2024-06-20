function shape(S) {
    for(let i=0;i<=S;i++){
        let arr = " ";
        for(let j=1;j<=i;j++){
            if(i==1||j==1||j==i||i==S){
                arr += "*"+" ";
            }
            else{
            arr += " "+" ";
            }
        }
        console.log(arr);
    }
}

shape(7);