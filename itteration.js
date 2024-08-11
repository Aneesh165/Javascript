

//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
let covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

// covid_data.forEach((a)=>console.log(a[1]));


//1. district having Highest +ve case - 
let highest =covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(highest[1]);


console.log('-------------------------------------------');


//2. district having Highest 1st dose vaccine - 
let firstdose = covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(firstdose);



console.log('-------------------------------------------');
    

//3. district having lowest death rate - 
let lowdeath =covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(lowdeath);
  
console.log('-------------------------------------------');


//4. sort data with +ve case in descending order - 

// let descend=covid_data.sort((a,b)=>b[2]-a[2])
// console.log(descend)

// console.log('-------------------------------------------');


    
//5. is district with +ve cases > 15000 - 
let greater =covid_data.filter((a)=>a[2]>15000)
console.log(greater)
console.log('-------------------------------------------');

//6. sort data with 1st dose vaccine - 

let sorted =covid_data.sort((a,b)=>a[5]-b[5])
console.log(sorted)
console.log('-------------------------------------------');

//7. Print Thrissur details - 
let Thrissur=covid_data.filter((a)=>a[1]=="Thrissur")
console.log(Thrissur);
console.log('-------------------------------------------');
