let string = "aebcd";
let one = "aeacd";

if (string.length == one.length) {

  let sortedS = string.split("").sort();
  let sortedO = one.split("").sort();
  
  let Equal = true;
  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedO[i]) {
      Equal = false;
      break;
    }
  }
  if (Equal) {
    console.log("anagram");
  } else {
    console.log("false");
  }
  
} else {
  console.log("Not Equal");
}

