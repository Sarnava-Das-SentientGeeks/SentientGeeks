export {}
interface Car{
    brand: string;
    year:number;
    price:number;
}

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
}

const car:Car={
    brand:'Toyota',
    year:2022,
    price:25000,
};

const carBrand:string=getProperty(car,"brand");
console.log(carBrand);
