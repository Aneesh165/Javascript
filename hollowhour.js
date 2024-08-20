function glass(n) {

    for(let row=0;row<n;row++){
        let result =" ";
        for(let col=0;col<row+1;col++){
            result +=" ";
        }
        for(let col=1;col<=n-row;col++){
            if(col==1||row==0||col==n){
                result +="*";
            }
            else{
                result+=" ";
            }
            
        }
        for(let col=1;col<=n-row;col++){
            if(col==n-row||row==0){
                result +="*";  
            }
            else{
                result +=" ";
            }
        }
        console.log(result);
    }

    for(let row=0;row<n;row++){
        let result =" ";
        for(let col=0;col<n-row;col++){
            result +=" ";
        }
        for(let col=0;col<=row;col++){
            if(col==0||row==4){
                result +="*";  
            }
            else{
                result +=" ";
            }
            
        }
        for(let col=0;col<=row;col++){
            if(col==row||row==4){
                result +="*";  
            }
            else{
                result +=" ";
            }
        }
        console.log(result);
    }
}

glass(5);