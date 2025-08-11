//array reduce

const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total); // 👉 60


//เขียนให้สั้นๆ
const total1 = numbers.reduce((sum, num) => sum + num, 0);
console.log(total1); // 👉 60