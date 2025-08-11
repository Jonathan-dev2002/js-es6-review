//ค้นหาข้อมูลใน Arr
//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find (ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้าไม่เจอจะได้ undefined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const color = ["red","green","blue","pink","white"]

console.log("use indexOf : "+color.indexOf("green"))

console.log("use find : "+color.find(e=>e==="green"))

console.log("use findIndex : "+color.findIndex(e=>e==="red"))