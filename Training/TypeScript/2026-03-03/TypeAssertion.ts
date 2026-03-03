let variable_any:any=123
let variable_number:number =variable_any as number

let variable_unknown:unknown="Tutorialspoint";
console.log("variable_unknown value is: ",variable_unknown)
let variable:number=(variable_unknown as string).length;
console.log("Length of variable_unknown: ", variable);

interface info{
    name:string,
    value:string
}
let my_obj=<info>{name:"ABC",value:"abc"}
