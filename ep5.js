//spread operator (กระจายค่าใน arr)

const newArr = [100, 200, 300]
const data = [10, 20, newArr] //array ซ้อน array
console.log(data)
console.log(data.length) //3

const newArr1 = [100, 200, 300]
const data1 = [10, 20, ...newArr]
console.log(data1)
console.log(data1.length) //5


const newArr2 = [100, 200, 300]
const data2 = [10, 20]
data2.push(newArr2) //array ซ้อน array
console.log(data2)
console.log(data2.length) //3

const newArr3 = [100, 200, 300]
const data3 = [10, 20]
data3.push(...newArr3)
console.log(data3)
console.log(data3.length) //5
