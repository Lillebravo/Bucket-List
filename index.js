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

// Adding classes to all elements
ownerName.classList.add("owner");
bucketListTitle.classList.add("list-name");
listDesc.classList.add("list-desc");
listOfGoals.classList.add("list");

// Adding styles
/* document.body.style.maxWidth = '0 rem';
document.body.style.paddingTop = '2rem';
document.body.style.textAlign = 'center'; */
const style = document.createElement("style");

style.innerHTML = `
    * {
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0; /* Optionally, reset padding as well */
    }
    body {
    max-width: 50rem;
    padding-top: 2rem;
    text-align: center;
  }
    main {
    padding-inline: 2rem;
  }
  
  .owner {
    font-family: "Allura", cursive;
    font-size: 3rem;
  }
  
  .list-name {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  .list-desc {
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    margin-bottom: 2rem;
    padding-block: 0.5rem;
  }
  
  @media screen and (min-width: 800px) {
    body {
      margin: auto;
    }
  }
`;
document.head.appendChild(style);
