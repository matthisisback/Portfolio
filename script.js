document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#main-menu");
  const navLinks = nav.querySelectorAll("a");
  const sections = document.querySelectorAll("section");

  // Fonction pour activer la section correspondante
  function activateSection(sectionId) {
    sections.forEach((section) => section.classList.remove("active"));
    document.querySelector(sectionId).classList.add("active");
  }

  // Gestion des clics sur les liens du menu
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = link.getAttribute("href");
      activateSection(sectionId);
      document.querySelector(sectionId).scrollIntoView({
        behavior: "smooth",
      });
      window.location.hash = sectionId; // Met à jour l'URL avec le fragment de l'ancre
    });
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
