//splice & slice
//splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกที่ต้องการแทรกไปแทน)
//slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)

const data = [10,20,30,40,50,60]
data.splice(2,2)
console.log(data)

const data1 = [10,20,30,40,50,60]
data1.splice(2,2,99)
console.log(data1)

const data2 = [10,20,30,40,50,60]
const ddat2 = data2.slice(1,3)
console.log(ddat2)
