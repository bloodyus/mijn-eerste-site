const facts = [
  "ik ben heel slim",
  "ik hou van gamen",
  "ik haat witlof en rode kool!",
  "ik hou van manga lezen"
];

const factButton = document.getElementById("factButton");

factButton.addEventListener("click", function() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factText").textContent = randomFact;

  explodeButton(factButton);
});

function explodeButton(button) {
  // korte schud/knal-animatie op de knop zelf
  button.classList.remove("exploding"); // reset als 'm nog bezig was
  void button.offsetWidth; // forceer reflow zodat animatie opnieuw start
  button.classList.add("exploding");

  // scherven genereren
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const shardCount = 12;

  for (let i = 0; i < shardCount; i++) {
    const shard = document.createElement("div");
    shard.className = "shard";

    const angle = (Math.PI * 2 * i) / shardCount + Math.random() * 0.3;
    const distance = 60 + Math.random() * 60;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    shard.style.left = `${centerX}px`;
    shard.style.top = `${centerY}px`;
    shard.style.setProperty("--dx", `${dx}px`);
    shard.style.setProperty("--dy", `${dy}px`);
    shard.style.background = ["#ff5252", "#ffca28", "#4fc3f7", "#66bb6a"][i % 4];

    document.body.appendChild(shard);

    shard.addEventListener("animationend", () => shard.remove());
  }

  button.addEventListener("animationend", function handler() {
    button.classList.remove("exploding");
    button.removeEventListener("animationend", handler);
  });
}
