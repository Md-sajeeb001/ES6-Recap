const numArr = [22, 33, 44, 55, 66];

// foreach can not return bydefault ,
const forArr = numArr.forEach((n) => {
  const num = n * 2;
  return num;
});

const num = numArr.forEach((n) => n / 2);
console.log(num);
