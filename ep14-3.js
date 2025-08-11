const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

// สมมติว่าเราต้องการสร้างอาร์เรย์ใหม่ที่ใส่สกุลเงินเข้าไปด้วย
const productsWithCurrency = products.map(product => {
  return {
    itemName: product.name,
    itemPrice: `${product.price} USD`
  };
});

console.log(productsWithCurrency);
/*
ผลลัพธ์:
[
  { itemName: 'Laptop', itemPrice: '1200 USD' },
  { itemName: 'Mouse', itemPrice: '25 USD' },
  { itemName: 'Keyboard', itemPrice: '75 USD' }
]
*/