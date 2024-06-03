let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let microAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: "0.0000000001",
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = 1;
salamander.astronautID = 2;
superChimpTwo.astronautID = 3;
dog.astronautID = 4;
microAnimal.astronautID = 5;
console.log(superChimpOne);

// Add a move method to each animal object
function moveFunction() {return Math.floor(Math.random() * 11)};
superChimpOne.move = moveFunction;
salamander.move = moveFunction;
superChimpTwo.move = moveFunction;
dog.move = moveFunction;
microAnimal.move = moveFunction;
console.log(superChimpOne);

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, microAnimal];
// Print out the relevant information about each animal.
function crewReports(animal){
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(dog));
console.log(crewReports(microAnimal));

// Start an animal race!
function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

let raceResults = fitnessTest(crew);

for (let i = 0; i < raceResults.length; i++) {
   console.log(raceResults[i]);
}