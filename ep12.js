//loop arr
//for loop,foreach , forof

const data = [10,20,30,40,50]
for(let i = 0;i<data.length;i++){
    if(data[i]===30)
        break
    
    console.log(data[i])
} 

console.log("--------")


//loop forEach ใช้พวก break,continue ไม่ได้
const data1 = [10,20,30,40,50]
data1.forEach(element =>{
    if (element>=30){
        console.log("hello")
    }
        
    console.log(element)
})


console.log("--------")

let sum = 0
let r = 1
data1.forEach(e=>{
    sum+=e
    console.log(`รอบ : ${r}`,sum)
    r++
})

console.log("--------")

let sum1 = 0
data1.forEach(e => {
    console.log(`${sum1} + ${e} = ${sum1 + e}`); 
    sum1 += e;
});


console.log("--------")

//forOf
data2 = [10,20,30,40,50]
for(const i of data2){
    console.log(i)
}

console.log("--------")

data3 = [10,20,30,40,50]
let sum3 = 0
for(const i of data3){
    console.log(`${sum3}+${i}=${sum3+i}`)
    sum3+=i
    
}
