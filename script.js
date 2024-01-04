var hobbies = [
  "playing video games",
  "reading comic books",
  "travelling",
  "learning French",
  "surfing the web",
  "listening to music",
];
console.log(hobbies.length);

hobbies.push("trying new food");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "hanging with friends", "online shopping");

console.log(hobbies);

hobbies.shift();

console.log(hobbies);

hobbies.unshift("playing with my dog");

console.log(hobbies);

var goals = [
  "transition into tech",
  "own my own home",
  "see more of the world",
];

var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);
console.log(allTheThings.indexOf("own my own home"));