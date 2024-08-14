function robber() {
  let nums = [4];
  let n = nums.length;
  let total = 0;
  if (n == 1) {
    console.log(nums[0]);
  }
  if (n == 2) {
    let min = nums.reduce((a, b) => (a[0] > b[1] ? a : b));
    console.log(min);
  }
  if (n > 2) {
    for (i = 0; i < n; i++) {
      if (i % 2 == 0) {
        total += nums[i];
      }
    }
    console.log(total);
  }
}

robber();
