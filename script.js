
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Destination search
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("destinationSearch");
const destinationCards = document.querySelectorAll(".destination-card");
const searchMessage = document.getElementById("searchMessage");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchMessage.textContent = "Enter a destination to start exploring.";
    searchInput.focus();
    return;
  }

  let matchCount = 0;

  destinationCards.forEach((card) => {
    const searchableText = (
      card.dataset.destination + " " + card.innerText
    ).toLowerCase();

    const matches = searchableText.includes(query);
    card.hidden = !matches;

    if (matches) matchCount++;
  });

  searchMessage.textContent = matchCount
    ? `Found ${matchCount} destination${matchCount === 1 ? "" : "s"} for "${searchInput.value.trim()}".`
    : `No featured destinations found for "${searchInput.value.trim()}". Try Bali, Japan, Italy or Switzerland.`;

  document.getElementById("destinations").scrollIntoView({
    behavior: "smooth"
  });
});

// Newsletter demo form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("newsletterEmail").value.trim();

  if (!email) return;

  newsletterMessage.textContent =
    "Thanks for your interest! This demo does not save subscriptions yet.";

  newsletterForm.reset();
});

// Contact form demo
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  contactMessage.textContent =
    "Thanks for reaching out! This demo form is not connected to an email service.";

  contactForm.reset();
});

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();
