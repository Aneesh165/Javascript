function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let arra = " ";
    for (let j = 1; j <= n; j++) {
      arra += "*";
    }
    console.log(arra);
  }
}
pattern(4);
