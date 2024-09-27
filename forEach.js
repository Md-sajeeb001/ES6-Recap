const numArr = [22, 33, 44, 55, 66];

// foreach can not return bydefault ,
const forArr = numArr.forEach((n) => {
  const num = n * 2;
  return num;
});

const shopping = [
  {
    item1: "2 Pant",
    shirt: "buy 2 shrit",
    market: "Bali arket",
    rishkwaCost: 50,
    products: {
      id: 1,
      porduct: "lenovo",
      price: 35000,
    },
  },
  { item1: "4 Pant", shirt: "buy 5 shrit", market: "Finlay", rishkwaCost: 100 },
];

// const result = shopping[0].products.porductk;
// console.log(result)

const forArr2 = shopping.forEach((p) => p[0]);
// console.log(forArr2);

const products2 = [
  { id: 1, model: "lenovo", price: 35000 },
  { id: 2, model: "dell", price: 45000 },
  { id: 3, model: "hp", price: 65000 },
  { id: 4, model: "mac", price: 145000 },
];

const product = products2.forEach((p) => console.log(p.price));
// console.log(product);
