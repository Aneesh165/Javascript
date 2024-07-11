function pattern(N) {
  for (let i = 1; i <= N; i++) {
    let order = " ";
    for (let j = 1; j <= N; j++) {
      if (i == 1 || j == 1 || i == N || j == N) {
        order += "*";
      } else {
        order += " ";
      }
    }
    console.log(order);
  }
}
pattern(5);
