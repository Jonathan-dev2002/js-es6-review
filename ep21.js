//ทบทวน+ประยุกต์ใช้

//
const students = [
  { name: "Joey", score: 85 },
  { name: "Jane", score: 72 },
  { name: "John", score: 58 },
  { name: "June", score: 94 },
  { name: "Jack", score: 45 },
];

const graded = students.map(({ name, score }) => {
  let grade = "";
  if (score >= 80) grade = "A";
  else if (score >= 70) grade = "B";
  else if (score >= 60) grade = "C";
  else if (score >= 50) grade = "D";
  else grade = "F";

  return `👤 ${name} ได้คะแนน ${score} = เกรด ${grade}`;
});

console.log(graded.join("\n"));

const passed = students.filter(({ score }) => score >= 50);
console.log("✅ คนที่ผ่านมี:", passed.map((s) => s.name).join(", "));

const avgScore =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log(`📊 คะแนนเฉลี่ย: ${avgScore.toFixed(2)}`);

const fullResult = students.map((s) => {
  const score = s.score;
  let grade = "";
  if (score >= 80) grade = "A";
  else if (score >= 70) grade = "B";
  else if (score >= 60) grade = "C";
  else if (score >= 50) grade = "D";
  else grade = "F";

  return { ...s, grade }; // spread แล้วเพิ่ม field grade
});

console.table(fullResult);
