// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myDate = new Date(2004,5,17,5,12)
console.log(myDate.toLocaleString()); 

let myDate = new Date("2004-06-17")
console.log(myDate.toLocaleString()); 

let myDate = new Date("06-17-2004")
console.log(myDate.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp); 

console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000)); 


let myDate = new Date()
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getMonth()+1);

console.log(myDate.toLocaleString('default',{
    weekDay: "long",
    // timeZone: 
}));