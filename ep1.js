//block scope(let/constant)
"use strict";
//แบบเดิม
var x =10

if(x===10){
    var y = 5020
    console.log("y ใน = "+y)
}
// console.log("y นอก = "+y)


//แบบใหม่ es6 = cont,let
var x =10

if(x===10){
    let y = 500
    console.log("y ใน 1= "+y)
}
console.log("y นอก 2= "+y)
