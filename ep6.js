//rest parameter

summation=(x,y,z)=>{
    return x+y+z
}
console.log(summation(15,5)) //not a number ??


newSummation=(...numberArr)=>{
    let total = 0
    let round = 1
    for( let number of numberArr){
        total+= number
        console.log(`รอบที่ ${round} เพิ่มค่า ${number} -> total: ${total}`);
        round++
    }
    return total
}
console.log(newSummation(20,10,20,0,1))

