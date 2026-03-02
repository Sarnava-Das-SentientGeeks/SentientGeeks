interface IPerson{
    firstName:string,
    lastName:string,
    sayHi:()=>string
}

const customer:IPerson={
    firstName:"Tom",
    lastName:"Hanks",
   sayHi: ():string =>{return "Hi there"} 
}

console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);


const employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 


console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);