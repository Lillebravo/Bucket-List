const body = document.body;
const ownerName = document.createElement("h2");
const bucketListTitle = document.createElement("h1");
const listDesc = document.createElement("div");
const listDescText = document.createElement("em");
const listSection = document.createElement("section");
const goal1 = document.createElement("p");

body.appendChild(ownerName);
body.appendChild(bucketListTitle);
body.appendChild(listDesc);
listDesc.appendChild(listDescText);
body.appendChild(listSection);
listSection.appendChild(goal1);

ownerName.innerHTML = "Jerry´s";
bucketListTitle.innerHTML = "Bucket List";
listDescText.innerHTML = "Things to do before I die";
goal1.innerHTML = "Earn a million dollars";

ownerName.classList.add("owner");
bucketListTitle.classList.add("list-name");
listDesc.classList.add("list-desc");
listSection.classList.add("list");
