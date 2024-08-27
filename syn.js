// function one() {
//   console.log("one");
// }
// function two() {
//   setTimeout(()=>console.log("second"), 3000);
// }
// function third() {
  
//   setInterval(()=>console.log("third"),2000);
// }
// one()
// two()
// third()
async function fetchdata() {
    try {
      let link=await fetch("https://jsonplaceholder.typicode.com/posts")
      let response=await link.json();
      console.log(response);
      
    } catch (error) {
        console.log("error")
    }
}
fetchdata()