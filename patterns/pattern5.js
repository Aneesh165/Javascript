function shape(N) {
    for(let i=0;i<=N;i++){
        let sm = " ";
        for(j=0;j<=N-i;j++){
            sm +=" ";
        }
        for(let j=1;j<=i;j++){
            sm +="*";
        }
        console.log(sm);
    }
}
shape(8)