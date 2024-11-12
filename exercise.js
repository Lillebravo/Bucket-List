const bucketListGoals = [
  "Earn a million dollars",
  "Visit All Seven Continents",
  "Swim with sharks",
  "Stop working",
  "Learn a new language fluently",
  "Skydive or bungee jump",
  "Attend a major world festival",
  "Volunteer for a cause abroad",
  "Run a marathon (or complete a major physical challenge)",
  "Take a road trip across a country",
  "Learn to play a musical instrument",
  "Create a passive income stream",
  "See the Northern Lights",
];
let bucketListCounter = 1;

// 1.
const listOfGoals = document.getElementsByClassName("list")[0];
const goal2 = document.createElement("p");
goal2.innerHTML = `Goal 2: ${bucketListGoals[bucketListCounter]}`;
bucketListCounter++;
listOfGoals.appendChild(goal2);

// 2.
const goal3 = document.createElement("p");
goal3.innerHTML = `Goal 3: ${bucketListGoals[bucketListCounter]}`;
bucketListCounter++;
listOfGoals.insertAdjacentElement("beforeend", goal3);

// 3.
console.log(listOfGoals);

// 4.
const goal4 = document.createElement("div");
goal4.innerHTML = `<div>Goal 4: ${bucketListGoals[bucketListCounter]}</div>`;
bucketListCounter++;

// 5.
//listOfGoals.innerHTML = "<div>This is a div element as a string</div>";

// 6.
const goal1 = document.querySelector(".list p");
goal1.innerHTML = `Goal 1: ${bucketListGoals[0]}`;
listOfGoals.insertBefore(goal4, goal1);

// 7.
for (let i = bucketListCounter; i < bucketListCounter + 3; i++) {
  const g = document.createElement("p");

  g.id = `goal${i + 1}`;
  g.innerHTML = `Goal ${i + 1}: ${bucketListGoals[i]}`;

  listOfGoals.appendChild(g);
}
bucketListCounter += 3;

// 8.
console.log(console.log(Array.from(listOfGoals.children)));

// 9.
const ownerName = document.getElementsByClassName("owner")[0];
ownerName.innerHTML = "Jerry´s";

// 10.
const newGoal1 = document.createElement("p");
newGoal1.innerHTML = `Goal 1: ${bucketListGoals[bucketListCounter]}`;
bucketListCounter++;
listOfGoals.replaceChild(newGoal1, goal1);
// I switched places with the original goal in the list
// If i want i can switch it with goal4 which currently is at the top

// 11.
const middleIndex = Math.floor(listOfGoals.children.length / 2);
const middleGoal = listOfGoals.children[middleIndex];

const newMiddleGoal = document.createElement("p");
newMiddleGoal.innerHTML = `Goal ${bucketListCounter + 1}: ${
  bucketListGoals[bucketListCounter]
}`;
bucketListCounter++;
listOfGoals.replaceChild(newMiddleGoal, middleGoal);

// 12. 
listOfGoals.removeChild(listOfGoals.lastElementChild);
