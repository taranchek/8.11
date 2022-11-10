let json = `{ "data1": [1,2,3], "data2": [4,5,6], "data3": [7,8,9] }`;
let arr = JSON.parse(json);
let sum = 0;
for(let i = 0; i < 5; i++){
  sum = sum + arr[i];
  }
console.log(sum);