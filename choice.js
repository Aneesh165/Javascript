function operation(n,m,c){
    let num1 = n;
    let num2 = m;
    let choice = c;
    switch (choice) {
        case 1:
            //addition
            let add =num1+num2;
            console.log(num1+"+"+num2+"="+`${num1+num2}`);
            break;
        case 2:
            //subtraction
            console.log(num1+"-"+num2+"="+`${num1-num2}`);
            break;
        case 3:
            //multiplication
            console.log(num1+"*"+num2+"="+`${num1*num2}`);
            break;
        case 4:
            //division
                console.log(num1+"/"+num2+"="+`${num1/num2}`);
                break;
    
        default:
            console.log("invalid choice")
            break;
    }
}

operation(6,5,3)