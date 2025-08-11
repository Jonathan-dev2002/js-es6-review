//ทบทวน+ประยุกต์ใช้
const cart = [
  { product: 'Laptop', price: 50000 },
  { product: 'Mouse', price: 800 },
  { product: 'Keyboard', price: 1500 }
];

// ขั้นตอนที่ 1: ใช้ .map() เพื่อดึงราคาออกมาเป็นอาร์เรย์ใหม่
const prices = cart.map(item => item.price);
// ผลลัพธ์ของ prices คือ: [50000, 800, 1500]

// ขั้นตอนที่ 2: ใช้ .reduce() เพื่อหาผลรวมจากอาร์เรย์ของราคา
const totalPrice = prices.reduce((sum, currentPrice) => sum + currentPrice, 0);
// ผลลัพธ์ของ totalPrice คือ: 52300