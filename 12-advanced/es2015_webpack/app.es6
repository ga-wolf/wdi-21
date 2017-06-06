console.log("OH MY GOD, I LOVE WEBPACK SO MUCH");

const something = true;

const addNums = (x, y) => x + y;
const res = addNums(4, 5);

console.log(res);

for (let i = 0; i <= 5; i += 1) {
  window.setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
