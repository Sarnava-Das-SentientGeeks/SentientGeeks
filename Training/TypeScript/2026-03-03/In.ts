let obj3:{id:number; marks:{english:number;math:number}}={
    id:101,
    marks:{ math:90, english:80}
}
console.log('marks' in obj3)
console.log('math' in obj3.marks)