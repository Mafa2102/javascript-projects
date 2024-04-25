// Declare and assign the variables below

let shuttleName;
shuttleName = 'Determination';

let shuttleSpeedMph; 
shuttleSpeedMph = 17500;

let distanceToMarsKm;
distanceToMarsKm = 225000000;

let distanceToMoonKm;
distanceToMoonKm = 38400;

let milesPerKm;
milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)

// Calculate a space mission below
let milesToMars;
milesToMars = distanceToMarsKm * milesPerKm;

let hoursToMars;
hoursToMars = milesToMars / shuttleSpeedMph;

let daysToMars; 
daysToMars = hoursToMars / 24;

console.log(daysToMars)

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars. ")

// Calculate a trip to the moon below

let milesToMoon;
milesToMoon = distanceToMoonKm * milesPerKm;

let hoursToMoon;
hoursToMoon = milesToMoon / shuttleSpeedMph

let daysToMoon;
daysToMoon = hoursToMoon / 24 

console.log(daysToMoon)

// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon. ")