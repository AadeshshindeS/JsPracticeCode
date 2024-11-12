let input = [1, [3, 5, 7, [2, [2, 5]]], [6], 9, 10, [90]];

let newInput = [];

function flatNArray(input) {
  for (let i = 0; i < input.length; i++) {
    let isArray = Array.isArray(input[i]);
	console.log(isArray)

	if (!isArray) {
		newInput.push(input[i])
	}else{
		flatNArray(input)
	}
  }
}

flatNArray(input);

console.log(newInput);
