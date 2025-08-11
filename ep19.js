//ทบทวน+ประยุกต์ใช้

//3. โปรแกรมรวมค่าเงินเดือน ด้วย reduce + filter

const employees = [
  { name: "A", salary: 30000, department: "programmer" },
  { name: "B", salary: 50000, department: "designer" },
  { name: "C", salary: 35000, department: "programmer" },
];

const totalProgrammerSalary = employees
  .filter((e) => e.department === "programmer")
  .reduce((sum, e) => sum + e.salary, 0);

console.log("รวมเงินเดือนสาย programmer:", totalProgrammerSalary);
