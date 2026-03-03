interface Person{
    name:string;
    age:number;
}

type PersonKeys=keyof Person;
const keys: PersonKeys='name';
console.log(keys);