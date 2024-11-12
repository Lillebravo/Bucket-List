const body = document.body;

const ownerName = document.createElement("h2");
const bucketListTitle = document.createElement("h1");

const listDesc = document.createElement("div");
const listDescText = document.createElement("em");

const listOfGoals = document.createElement("section");
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
];
for (let i = 0; i < 10; i++) {
  const goal = document.createElement("p");

  goal.id = `goal${i + 1}`;
  goal.innerHTML = bucketListGoals[i];

  listOfGoals.appendChild(goal);
}

body.appendChild(ownerName);
body.appendChild(bucketListTitle);
body.appendChild(listDesc);
listDesc.appendChild(listDescText);
body.appendChild(listOfGoals);

ownerName.innerHTML = "Jerry´s";
bucketListTitle.innerHTML = "Bucket List";
listDescText.innerHTML = "Things to do before I die";

ownerName.classList.add("owner");
bucketListTitle.classList.add("list-name");
listDesc.classList.add("list-desc");
listOfGoals.classList.add("list");


