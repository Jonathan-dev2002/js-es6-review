//ทบทวน+ประยุกต์ใช้

//2. สร้างระบบสรุปอุณหภูมิจากข้อมูล weather (map + template string)

const weatherData = [
  { date: "01/06/2564", weather: "แดดร้อน", temp: 27 },
  { date: "02/06/2564", weather: "ฝนตก", temp: 23 },
  { date: "03/06/2564", weather: "หมอก", temp: 18 },
];

const summaries = weatherData.map(({ date, weather, temp }) => {
  return `📅 ${date} | สภาพอากาศ: ${weather} | 🌡️ ${temp}°C`;
});

console.log(summaries);
console.log(summaries.join("\n"));