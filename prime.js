function isPrime(num) {
  if (num <= 1) {
    console.log(`${num} is not prime number`);
  }

  for (let i = 2; i < num; i++) {
	if (num %i === 0) {
		console.log(`${num} is not prime number`)
	}
  }

  console.log(`${num} is prime number`)
}

isPrime(3)