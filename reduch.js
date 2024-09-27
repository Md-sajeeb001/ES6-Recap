const products2 = [
  { id: 1, model: "BMW", price: 35000 },
  { id: 2, model: "Bugaddi", price: 45000 },
  { id: 3, model: "Corolla", price: 65000 },
  { id: 4, model: "Honda", price: 145000 },
];

const product = products2.reduce((p, c) => p + c.price, 0);
console.log(product);