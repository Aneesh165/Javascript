function patt(N) {
for (i = 0; i <= N; i++) {
    let num =" ";
  for (let j = 1; j <= i; j++) {
   num += "*"+" ";
  }
  console.log(num);
}
}

patt(6);