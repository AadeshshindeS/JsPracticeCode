const arr = [1,2,3,4]

// adding element
// arr[3] = 10
// console.log(arr)

// remove element 4
let index = arr.indexOf(4)
console.log(index)

if (index !== -1) {
	arr.splice(index, 1)
}
console.log(arr)