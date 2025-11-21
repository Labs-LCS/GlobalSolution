document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header-menu-button");
  const menuNav = document.querySelector(".header-links");

  if (menuButton && menuNav) {
    menuButton.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  }
});

document.querySelectorAll(".btn-agent").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("agent-panel").classList.add("active");
    lucide.createIcons();
  });
});

document.getElementById("close-panel").addEventListener("click", () => {
  document.getElementById("agent-panel").classList.remove("active");
});

function filterAgentCards(filterText) {
  const cards = document.querySelectorAll(".agent-card");
  
  cards.forEach((card) => {
    if (filterText === "Todos") {
      card.style.display = "";
      return;
    }

    const tags = card.querySelectorAll(".agent-tags .tag");
    let hasMatchingTag = false;

    tags.forEach((tag) => {
      if (tag.textContent.trim() === filterText) {
        hasMatchingTag = true;
      }
    });

    card.style.display = hasMatchingTag ? "" : "none";
  });
}

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    
    const filterText = chip.textContent.trim();
    filterAgentCards(filterText);
  });
});

