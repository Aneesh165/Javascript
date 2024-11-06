// let user ={
//     first:'Aneesh',
//     last:'Rahman',
//     FullName: function () {
//         console.log(this.first + " " +this.last);
//     }
// }
// user.FullName();


let user = {
    first:'Aneesh',
    last:'Rahman',
}
function Fullname (Town,State){
    console.log(this.first+" "+this.last+" from "+Town+" , "+State);
}
let Person ={
    first:'sachin',
    last:'cv'
}

                //Function Borrowing
// //callMethod
// Fullname.call(user , 'Calicut','Kerala')
// Fullname.call(Person,'Kochi','Kerala')

// //ApplyMethod
// Fullname.apply(user,['second','third'])
// Fullname.apply(Person,['second','Third'])


//Bindmethod
let UserName= Fullname.bind(user , 'Calicut','Kerala')
UserName()








