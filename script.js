const facts = [
  "ik ben heel slim",
  "ik hou van gamen",
  "ik haat witlof en rode kool!",
  "ik hou van manga lezen"
];

document.getElementById("factButton").addEventListener("click", function() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factText").textContent = randomFact;
});
