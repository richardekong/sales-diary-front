
const appTitle = document.querySelector("title");
const header = document.querySelector(".header");
const h2 = document.createElement("h2");

h2.textContent = appTitle.textContent;
header.append(h2);