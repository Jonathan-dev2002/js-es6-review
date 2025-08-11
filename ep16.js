//array reduce


const data = [10,20,30,40]

const mapData = data.map(e=>100)
console.log(mapData)

const filterData = data.filter(e=>e>20)
console.log(filterData)


//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) // value = 0
const result1 = data.reduce((value,e)=>{
    console.log(`ค่า e : ${e} + ค่า value : ${value} = ค่า total : ${e+value}`)
    const total = e+value
    return total
},0)

//หรือ
// const result1 = data.reduce((value,e)=>e+value,0)

console.log(result1)
