let str = "my name is aadesh sunil shinde";

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

