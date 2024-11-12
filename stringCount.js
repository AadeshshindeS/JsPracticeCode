let str = "my name is aadesh sunil shinde";

// 1. using for of
let newCount = {};
for (const x of str) {
  if (!newCount[x]) {
    newCount[x] = 1;
  } else {
    newCount[x] += 1;
  }
}
console.log(newCount);


// 2. using for loop
const count = {};
const strArr = [...str];
console.log(strArr);
for (let i = 0; i < strArr.length; i++) {
	if (!count[strArr[i]]) {
		count[strArr[i]] = 1
	}else{
		count[strArr[i]] += 1
	}
}
console.log(count)
