interface RunOptions{
    program:string,
    commandLine: string[]|string|(()=>string);
}

let options: RunOptions={program:"test1",commandLine:"Hello"};
console.log(options.commandLine);

options = {program:"test1",commandLine:["Hello","World"]}; 
// console.log(options.commandLine[0]); 
// console.log(options.commandLine[1]); 