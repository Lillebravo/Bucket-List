// 1.
const listOfGoals = document.getElementsByClassName("list")[0]; 
const pTag = document.createElement("p");
pTag.innerHTML = "Travel around the world";
listOfGoals.appendChild(pTag);

// 2.
const pTag2 = document.createElement("p");
pTag2.innerHTML = "Swim with sharks";
listOfGoals.insertAdjacentElement("beforeend", pTag2); 

// 3. 
console.log(listOfGoals);

// 4. 
const pTag3 = document.createElement("div");
pTag3.innerHTML = "<div>Stop working</div>";

// 5.
//listOfGoals.innerHTML = "<div>This is a div element as a string</div>";

// 6. 
const firstGoal = document.querySelector(".list p");
listOfGoals.insertBefore(pTag3, firstGoal);

// 7. 
