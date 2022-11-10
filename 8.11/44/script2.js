let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
let mass = JSON.parse(json);
let sum = 0;

console.log(mass);

let arr = mass.data1;

for(let i = 0; i < 3; i++){
  sum = sum + arr[i];
}

arr = mass.data2;

for(let i = 0; i < 3; i++){
  sum = sum + arr[i];
}

arr = mass.data3;

for(let i = 0; i < 3; i++){
  sum = sum + arr[i];
}

console.log(sum);