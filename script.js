const facts = [
  "The first website ever made is still online.",
  "JavaScript was created in just 10 days.",
  "Git was originally built by Linus Torvalds for Linux development.",
  "Ik heb echt moeilijk veel trek in een cheeseburger!"
];

document.getElementById("factButton").addEventListener("click", function() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factText").textContent = randomFact;
});
