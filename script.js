const facts = [
  "Echt",
  "EEN",
  "Baller!",
  "Ik heb moeilijk veel trek in een cheeseburger."
];

document.getElementById("factButton").addEventListener("click", function() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factText").textContent = randomFact;
});
