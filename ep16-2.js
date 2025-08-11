//array reduce

const employees = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 30000 },
  { name: "C", salary: 50000 },
];

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log("รวมเงินเดือน:", totalSalary); // 👉 100000


const fruits = ["apple", "banana", "mango"];
const sentence = fruits.reduce((text, fruit) => text + " " + fruit);

console.log(sentence); // 👉 "apple banana mango"
