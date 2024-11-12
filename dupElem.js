const arr = [1, 2, 1, 4, 1, 2, 1, 41, 2, 4, 1, 2, 1, 4];

let dup = [];

for (let i = 0; i < arr.length; i++) {
  let flag = false;

  for (let j = 0; j < dup.length; j++) {
    if (arr[i] === dup[j]) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    dup.push(arr[i]);
  }
}

