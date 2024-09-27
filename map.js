// doubled value using for of loop !

// const numArr = [12, 43, 88, 56, 90];

// const doubled = [];
// for (const num of numArr) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);

// value doubled using map and arrow function !

// function arrFun(num) {
//   return num * 2;
// }
// const result = numArr.map(arrFun);
// // console.log(result);

// const numArr2 = [33, 5, 20, 18, 40];

// const fun = (num) => num * 2;
// const result2 = numArr2.map(fun);
// // console.log(result2);

// const mapArr = numArr2.map((n) => n * 2);
// console.log(mapArr);

// using map and arrow function to division array number !

const diviArr = [23, 43, 12, 91, 19, 55];
const result = diviArr.map((n) => n / 2);
// console.log(result);

// add number
const add = diviArr.map((n) => n + 7);
// console.log(add);

const friends = ["tom", "tim", "malak", "jalek", "michels", "abdullha"];
const friendsArr = friends.map((frn) => {
  const len = frn.length;
  if (len > 3) {
    // console.log(frn);
  }
});

// using map function in array of objects

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

const shoppingMarket = shopping.map((sho) => sho.market);
// console.log(shoppingMarket);

const products2 = [
  { id: 1, model: "lenovo", price: 35000 },
  { id: 2, model: "dell", price: 45000 },
  { id: 3, model: "hp", price: 65000 },
  { id: 4, model: "mac", price: 145000 },
];

const product = products2.map((p) => p.model);
  console.log(product)

