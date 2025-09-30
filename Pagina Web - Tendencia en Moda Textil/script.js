// === Dark Mode ===
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

// === Botón "Subir arriba" ===
const btnTop = document.getElementById("btnTop");
window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 200 ? "block" : "none";
});
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Validación Formulario Contacto ===
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    formMsg.textContent = "⚠️ Por favor, completa todos los campos.";
    formMsg.style.color = "red";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMsg.textContent = "⚠️ Ingresa un correo válido.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "✅ ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto lo más pronto posible.";
formMsg.style.color = "green";
form.reset();

});

// === Mostrar Secciones por Menú ===
const menuLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    sections.forEach(sec => {
      sec.classList.remove("active-section");
    });

    const sectionToShow = document.getElementById(target);
    if (sectionToShow) sectionToShow.classList.add("active-section");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
