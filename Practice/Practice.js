// let x=5;
// let y=7;
// function sum(x,y){
//     return x+y;
// }
// let z=sum(x,y);
// console.log(z);

const arr1=[1,2,4,6];
// for(let i=0;i<arr1.length;i++)
//     console.log(`The array elements are ${arr1.at(i)}`);
// arr1.push(9);

// for(let i=0;i<arr1.length;i++)
//      console.log(`The array after array element was pushed:${arr1.at(i)}`);
// console.log(`The element which was popped: ${arr1.pop()}`);

// arr1.shift(56);
// console.log(`The element that was inserted at the beginning: ${arr1.unshift()}`);

const list=arr1.entries();
for(x of list)
    console.log(x);

let x= document.getElementById("demo");
x.addEventListener("mouseover",function(){
x.innerHTML="Hello <br> World!";
x.style.cssText="background-color:black; color:white;";
});

x.onclick=click_func;
function click_func(){
    x.innerHTML="the para has been clicked";
}





