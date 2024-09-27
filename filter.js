const bigestNum = [12, 20, 33, 23, 67, 88, 99, 44];
const num = bigestNum.filter((num) => num < 30);

const num2 = bigestNum.filter((num) => num > 50);
const num3 = bigestNum.filter((num) => num > 100);
// console.log(num2);
// console.log(num3);
// console.log(num);

const products2 = [
  { id: 1, model: "lenovo", price: 35000 },
  { id: 2, model: "dell", price: 45000 },
  { id: 3, model: "hp", price: 65000 },
  { id: 4, model: "mac", price: 145000 },
];

const productPrice = products2.filter((p) => p.price > 50000);
console.log(productPrice);
