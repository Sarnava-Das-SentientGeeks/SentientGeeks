function merge<T extends object, U extends object>(obj1:T,obj2:U){
    return{...obj1,...obj2};
}

const mergedObj=merge({name:"Sam"},{class:"2"});
console.log(mergedObj);