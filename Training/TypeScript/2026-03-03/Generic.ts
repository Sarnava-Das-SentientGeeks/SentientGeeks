function concatenate<T,U>(first:T,second:U):T & U{
return{...first,...second};
}
const resultString=concatenate("Hello"," World!");
console.log(resultString);

const resultArray=concatenate([1,2,3],[4,5,6]);
console.log(resultArray);