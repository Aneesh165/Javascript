let amount=100000;
let interest=4;
let period=4;

let Investdate= new Date();

let withdrawyear=period+Investdate.getFullYear();
let withdrawmonth=Investdate.getMonth()+1;
let withdrawdate=Investdate.getDate();

let SI=(amount*interest*period)/100;
console.log("Simple Interest for "+period+" Years for Amount: "+amount);

console.log("From "+ Investdate+" to "+withdrawyear+"-"+withdrawmonth+"-"+withdrawdate+"-"+" is : "+SI);
