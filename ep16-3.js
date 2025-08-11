const cart = [
  { product: 'Laptop', price: 50000, quantity: 1 },
  { product: 'Mouse', price: 800, quantity: 2 },
  { product: 'Keyboard', price: 1500, quantity: 1 }
];

const totalPrice = cart.reduce((accumulator, item) => {
  return accumulator + (item.price * item.quantity);
}, 0);

console.log(totalPrice);