function pattern(N) {
    for (let i = 1; i <= N; i++) {
        let sm = " ";
        for (let j = 0; j <= N - i; j++) {
            sm += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            sm += "*";
        }
        console.log(sm);
    }
}

pattern(5);
