AOS.init();

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const logoImg = document.getElementById("site-logo");

  function updateThemeIcon(isDark) {
    themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    lucide.createIcons();
    logoImg.src = isDark ? "logo-dark.png" : "logo-light.png";
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    updateThemeIcon(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
