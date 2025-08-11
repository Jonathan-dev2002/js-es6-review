//array map

const num = [10,20,30,40]
const result = num.map(e=>{
    const a = e*2
    return a
})
console.log(result)

//หรือ ลดรูปให้สั้น
const result1 = num.map(e=>{
    return e*2
})
console.log(result1)

//หรือ ลดรูปให้สั้น
const result2 = num.map(e=>e*2)
console.log(result2)

const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]
const result3 = data.map((e,i)=>{
    return `วันที่ ${i+1} , สภาพอากาศ ${e}`
})
console.log(result3)