const num = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 2, 1, 4, 2, 3, 2, 1, 4];

const count = {};

for (let i = 0; i < num.length; i++) {
  if (!count[num[i]]) {
	count[num[i]] = 1
  }else{
	count[num[i]] += 1
  }
}

console.log(count)