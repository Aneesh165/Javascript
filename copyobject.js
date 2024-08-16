// let person ={
//     name :"hello",
//     age:34
// }//id :1

// let person2 = person
// person2.name = "welcome"

// console.log(person2);
// console.log(person);

//shallowcopy

// let person ={
//     name :"hello",
//     age:34
// }//id :1

// let person2 = {...person}
// person2.name = "welcome"

// console.log(person);
// console.log(person2);

//deepcopy

let person = {
  name: "hello",
  age: 34,
  person: {
    name: "hello",
    age: 34,
  }, //id:2
}; //id :1

let deepcopy = structuredClone(person);
deepcopy.person.name = "hello world";
console.log(person);
console.log(deepcopy);
