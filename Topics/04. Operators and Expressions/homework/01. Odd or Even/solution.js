function solve(args) {
  const num = +args[0];
  if (num % 2 === 0) {
    console.log(`even ${num}`);
  } else {
    console.log(`odd ${num}`);
  }
}
solve([15]);
