function pattern(num) {
  for (let row = 1; row <= num; row++) {
    let array = " ";
    for (let j = 0; j < num - row; j++) {
      array += " ";
    }
    for (let k = 0; k < 2 * row - 1; k++) {
      if (k == 0 || row == num || k ==2 * row - 2) {
        array += "*";
      } else {
        array += " ";
      }
    }
    console.log(array);
  }
}

pattern(5);
