interface IGeneric<T,U>{
    value1:T;
    merge:(a:U,b:U)=>U;
}

let obj: IGeneric<number,string>={
    value1:10,
    merge:(a,b)=>a+b
};

console.log(obj.merge("Hello","world!"));