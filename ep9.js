//join, concat

//join แปลงจาก array -> string
const data = [100,200,300]
console.log(data)

const result = data.join()
const result1 = data.join("+")
console.log(typeof(result))
console.log(result)
console.log(result1)

//concat การต่อ array มาต่อกัน
const data1 = [100,200,300]
const data2 = [400,500,600]
const allData = data1.concat(data2)
console.log(allData)

