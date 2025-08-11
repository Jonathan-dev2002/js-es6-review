//ทบทวน+ประยุกต์ใช้

//1. map + filter + destructuring + default parameter ประยุกต์
// สถานการณ์: คัดกรองลูกค้าที่อายุเกิน 25 และแสดงชื่อในรูปแบบข้อความ

const customers = [
    { name: "Joey", age: 24, location: "BKK" },
    { name: "Jane", age: 29, location: "Pattaya" },
    { name: "June", age: 30, location: "Chiang Mai" },
  ];
  
  // แสดงชื่อคนที่อายุ > 25
  const namesOver25 = customers
    .filter(({ age }) => age > 25)
    .map(({ name, location }) => `คุณ ${name} (${location})`);
  
  console.log(namesOver25);
  