function pattern(N) {
    for (let i = 0; i <= N; i++) {
        let sm = " ";
        for (let j = 1; j <= N - i; j++) {
            sm += " ";
        }
        for (let j = 0; j <= i; j++) {
            sm += "*";
        }
        for (let j = 1; j <= i; j++) {
            sm += "*";
        }
        console.log(sm);
    }
}

pattern(5);
