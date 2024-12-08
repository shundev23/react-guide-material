function fn(number) {
  return number * 2;
}

// arrow関数の記載方法
/* const fn = (number) => {
  return number * 2;
}
*/

console.log("fn(2):",fn(2));

// 省略前
const fnArrow = (number) => {
  console.log(number);
  return number * 2;
}

// 省略後
// const fnArrow = number => number * 2;

console.log("fnArrow(2):",fnArrow(2));

// obj形式の戻り値
const fnArrowObj = number => ({ result: number * 2 })

console.log("fnArrowObj:",fnArrowObj(2));
