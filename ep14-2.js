// แปลงเลขทั้งหมดให้คูณ 2
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // 👉 [2, 4, 6]

// แปลง array ของ object ให้ได้ชื่อ
const users = [
  { id: 1, name: "Joey" },
  { id: 2, name: "Jane" },
];

const names = users.map((user) => user.name);
console.log(names); // 👉 ["Joey", "Jane"]


const letters = ['a', 'b', 'c'];
const combined = letters.map((ch, i) => `${i + 1}: ${ch}`);
console.log(combined);