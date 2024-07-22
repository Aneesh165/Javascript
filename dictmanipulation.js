// var word_count={"apple":5,"banana":2,"chery":5};
// // var sorted=word_count.tosort();
// // word_count.sort();
// const text=Object.entries(word_count);
// text.sort((a,b)=>b[1]-a[1]);
// const word=text[0];
// var last=[];
// for(let i=0;i<word_count.length;i++){
//  if(word==text[i]){
//     last += text[i];
//  }

// }
// console.log(last);

var word_count = { apple: 6, banana: 2, chery: 6 };

const sorted = Object.entries(word_count);
sorted.sort((a, b) => b[1] - a[1]);
const word = sorted[0];
let num = word[1];

let text = "";
for (let [word, count] of Object.entries(word_count)) {
  if (count == num) {
    text += word + ": " + count + " ";
  }
}
console.log(text);
