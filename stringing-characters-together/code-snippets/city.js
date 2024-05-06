//cityName = "Vienna";
//stateName = "Virginia";
//location = cityName + ", " +  stateName;

//console.log(location.length);

let language = "JavaScript";
//language.replace('J', 'Q');
//language.slice(0,5);
console.log(language.replace('J','Q').slice(0,5));

let word = "JavaScript";
console.log(word.toUpperCase());
console.log(word.slice(4).toUpperCase());

//let language = 'JavaScript';
//console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
//let trimmed = org.trim();

console.log(org.trim());


let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);