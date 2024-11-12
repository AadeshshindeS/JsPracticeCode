const factorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

let fact = factorial(5);
console.log(fact)
