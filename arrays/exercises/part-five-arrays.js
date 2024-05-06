let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); // convert string into array
console.log(str.split('e')); //convert string into array and remove all "e"
console.log(str.split(' '));
console.log(str.split(''));
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());  // B,n,n,5 convert array into a string
console.log(arr.join(''));  // Bnn5 convert array into a string and remove all spaces
console.log(arr.join(' '));  // B n n 5
console.log(arr.join(','));  // B,n,n,5
console.log(arr.join(', '));  // B, n, n, 5
//3) Do split or join change the original string/array?

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));