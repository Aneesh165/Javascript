function pattern(N) {
    for (let row = 1; row <= N; row++) {
        let sm = " ";
        for (let col = 0; col <= N - row; col++) {
            sm += " ";
        }
        for (let col = 0; col < 2 * row - 1; col++) {
            sm += "*";
        }
        console.log(sm);
    }
}

pattern(5);
