function merge<T,U>(obj1:T, obj2:U){
    return{ ...obj1,...obj2};
}

const mergedObj=merge({name:'Sam'},{age:30});
console.log(mergedObj);