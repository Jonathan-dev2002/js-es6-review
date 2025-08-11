const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'John', age: 21 }
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        // ถ้ายังไม่มี key ที่เป็นอายุนี้ใน accumulator ให้สร้าง key นั้นขึ้นมาเป็น array ว่างๆ ก่อน
        acc[age] = [];
    }
    // push คนปัจจุบันเข้าไปใน array ของอายุนั้นๆ
    acc[age].push(person);
    return acc;
}, {}); // ค่าเริ่มต้นเป็นอ็อบเจ็กต์ว่าง {}

console.log(groupedByAge);
/*
ผลลัพธ์:
{
  '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 }, { name: 'John', age: 21 } ]
}
*/