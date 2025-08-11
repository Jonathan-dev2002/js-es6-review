//ค้นหาข้อมูลใน Arr
//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find (ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้าไม่เจอจะได้ undefined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

//ตัวอย่าง indexOf()
const nums = [10, 20, 30, 40];
console.log(nums.indexOf(30));
console.log(nums.indexOf(50));

// ใช้เทียบค่าแบบตรง ๆ (===)
// ใช้ได้กับ primitive เช่น string, number
// ใช้กับ object ❌ ไม่ได้ผล



//ตัวอย่าง find()
const users = [
  { id: 1, name: "Joey" },
  { id: 2, name: "Jane" },
];

const user = users.find((u) => u.id === 2);
console.log(user); // 👉 { id: 2, name: "Jane" }

//   หาค่าแรกที่ "เงื่อนไขเป็นจริง"

// ✅ ใช้ได้กับ object, logic ซับซ้อนได้



// ตัวอย่าง findIndex()
const users1 = [
  { id: 1, name: "Joey" },
  { id: 2, name: "Jane" },
];

const index = users1.findIndex((u) => u.id === 2);
console.log(index); // 👉 1

// คล้าย find() แต่ได้ index แทนค่า