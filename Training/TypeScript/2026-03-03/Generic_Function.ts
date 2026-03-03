//Generic interface for a function
interface func_interface<T,U>{
    (input:T):U;
}

const stringToLength:func_interface<string,number>=(input)=>{
    return input.length;
};

const result= stringToLength("Hello, TypeScript!");
console.log(result);

